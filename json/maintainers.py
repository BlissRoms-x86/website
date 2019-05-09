import json

user_list = []

user = {}

user["name"] = input("Name: ")
user["email"] = input("Email: ")
user["device"] = []

while True:
	device_name = input("Device codename (type -1 to end): ")
	if device_name == "-1":
		break
	user["device"].append(device_name)

user_list.append(user)

print("Finished! Please give the following output to Eric:")
print(json.dumps(user_list, indent=4))