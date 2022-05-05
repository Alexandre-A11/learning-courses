import dotenv, os
from twilio.rest import Client

dotenv.load_dotenv()


class NotificationManager:
    # This class is responsible for sending notifications with the deal flight details.
    def send_msg(self, message):
        client = Client(os.environ.get("TWILIO_ACCOUNT_SID"), os.environ.get("TWILIO_AUTH_TOKEN"))
        message = client.messages.create(
            body=message,
            from_="+14232056556",
            to=os.getenv("PHONE"),
        )
        # Prints if successfully sent.
        print(message.sid)
