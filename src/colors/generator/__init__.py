from json import loads
import os
final_code = """

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {"""

colors_dir_path = "src/colors"
for filename in os.listdir(colors_dir_path):
    file_path = os.path.join(colors_dir_path, filename)
    
    if os.path.isdir(file_path): continue
    
    with open(file=file_path) as file:
        parsed_json = loads(file.read())
        for json_obj in parsed_json:
            final_code += f"'{json_obj["token"]}' : \"{json_obj["hex"]}\","
            


final_code += """   },
},
}"""

#TODO make this add colors on a .ts file, also this should not be recreating the file everytime
with open(file="tailwind.config.js", mode="+w") as final_file:
    final_file.write(final_code)

