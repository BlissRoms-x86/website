import json

# Previous/new JSON file here
old_file_name = "profile.json"
new_file_name = "profile_new.json"

# Read previous JSON
with open(old_file_name, "r") as read_json:
	old_data = json.load(read_json)
	print("JSON loaded successfully. Beginning conversion...")

# Initialize new dictionary
user_list = []

# Conversion
index = 0
for i in old_data["Name"]:
	user = {}
	user["name"] = i
	user["email"] = old_data["Email"][index][7:]
	user["avatar"] = old_data["Avatar"][index]
	user["description"] = old_data["Description"][index]
	user["github"] = old_data["Github"][index]
	user["xda"] = old_data["XDA"][index]
	user["facebook"] = old_data["Facebook"][index]
	user["twitter"] = old_data["Twitter"][index]
	user["instagram"] = old_data["Instagram"][index]
	user["googleplus"] = old_data["GooglePlus"][index]
	user_list.append(user)
	index += 1
	
# Verify each user
for i in user_list:
	print(i)

# Write new JSON
with open(new_file_name, "w") as write_json:
	json.dump(user_list, write_json, indent=4)