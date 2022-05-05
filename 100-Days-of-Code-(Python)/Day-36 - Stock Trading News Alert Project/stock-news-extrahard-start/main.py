## STEP 1: Use https://www.alphavantage.co
# When STOCK price increase/decreases by 5% between yesterday and the day before yesterday then print("Get News").
import requests, dotenv, os
from twilio.rest import Client

dotenv.load_dotenv()

STOCK = "TSLA"
COMPANY_NAME = "Tesla"
URL_ALPHA = "https://www.alphavantage.co/query"
URL_NEWS = "https://newsapi.org/v2/top-headlines"
PHONE = os.environ.get("MY_PHONE")

parameters_alpha = {
    "function": "TIME_SERIES_DAILY",
    "symbol": STOCK,
    "apikey": os.environ.get("API_KEY_ALPHA"),
}


response = requests.get(URL_ALPHA, params=parameters_alpha)
response.raise_for_status()
data_alpha = response.json()["Time Series (Daily)"]

stock_last_2_days = {
    "yesterday": float(list(data_alpha.values())[0]["4. close"]),
    "b_yesterday": float(list(data_alpha.values())[1]["4. close"]),
}

stock_diference = round((stock_last_2_days["yesterday"] / stock_last_2_days["b_yesterday"] - 1) * 100)

if stock_diference >= 5 or stock_diference <= -5:
    # print("Get News")
    ## STEP 2: Use https://newsapi.org
    # Instead of printing ("Get News"), actually get the first 3 news pieces for the COMPANY_NAME.
    parameters_news = {
        "apiKey": os.environ.get("API_KEY_NEWSAPI"),
        "q": COMPANY_NAME,
        "pageSize": 3,
    }
    response = requests.get(URL_NEWS, params=parameters_news)
    response.raise_for_status()
    data_newsapi = response.json()["articles"]

    percent = f"🔺{stock_diference}" if stock_diference > 0 else f"🔻{stock_diference}"

    ## STEP 3: Use https://www.twilio.com
    # Send a separate message with the percentage change and each article's title and description to your phone number.
    client = Client(os.environ.get("TWILIO_ACCOUNT_SID"), os.environ.get("TWILIO_AUTH_TOKEN"))
    for article in data_newsapi:
        message = client.messages.create(
            body=f"{percent}% Headline:{article['title']}\nBrief:{article['description']}",
            from_="+14232056556",
            to=PHONE,
        )

# Optional: Format the SMS message like this:
"""
TSLA: 🔺2%
Headline: Were Hedge Funds Right About Piling Into Tesla Inc. (TSLA)?. 
Brief: We at Insider Monkey have gone over 821 13F filings that hedge funds and prominent investors are required to file by the SEC The 13F filings show the funds' and investors' portfolio positions as of March 31st, near the height of the coronavirus market crash.
or
"TSLA: 🔻5%
Headline: Were Hedge Funds Right About Piling Into Tesla Inc. (TSLA)?. 
Brief: We at Insider Monkey have gone over 821 13F filings that hedge funds and prominent investors are required to file by the SEC The 13F filings show the funds' and investors' portfolio positions as of March 31st, near the height of the coronavirus market crash.
"""
