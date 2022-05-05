#
# ? List Comprehension
# new_list = [new_item for item in list]
# new_list = [new_item for item in list if condition]

# ? Dictionary Comprehension
# new_dict = {new_key:new_value for item in list}
# new_dict = {new_key:new_value for (key, value) in dict.items()}
# new_dict = {new_key:new_value for (key, value) in dict.items() if condition}

# * Example
names = ["Alex", "Beth", "Caroline", "Dave", "Eleanor", "Freddie"]

import random

students_scores = {student: random.randint(1, 100) for student in names}
print(students_scores)

passed_students = {student: score for (student, score) in students_scores.items() if score >= 60}
print(passed_students)

# ? How to Iterate over a Pandas DataFrame
student_dict = {
    "student": ["Angela", "James", "Lily"],
    "score": [56, 76, 98],
}

# Looping through dictionaries:
# for (key, value) in student_dict.items():
#     print(key, value)

import pandas


student_data_frame = pandas.DataFrame(student_dict)
print(student_data_frame)

# Loop through a DataFrame
# for (key, value) in student_data_frame.items():
#     print(key, value)

# Loop through rows of a DataFrame
for (index, row) in student_data_frame.iterrows():
    # print(index, row)
    if row.student == "Angela":
        print(row.score)
