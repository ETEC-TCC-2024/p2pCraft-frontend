from json import loads
import os
final_code = """

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {"""


for filename in os.listdir("colors"):
    file_path = os.path.join("colors", filename)
    with open(file=file_path) as file:
        parsed_json = loads(file.read())
        for json_obj in parsed_json:
            final_code += f"'{json_obj["token"]}' : \"{json_obj["hex"]}\","
            


final_code += """   },
},
}"""

with open(file="tailwind.config.js", mode="+w") as final_file:
    final_file.write(final_code)

