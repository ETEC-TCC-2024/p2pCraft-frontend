var fs = require("fs")
const path = require('path');
const CaseConverter = require("js-convert-case")

const process = require('process')
process.chdir("src/app/components/icon/script/")

const svgFolder = "../svg/"
const iconComponentsOutput = "../icons/"
const rootIconOutput = "../Icon.tsx"


function getLazyImport(iconName) {
    return `const ${iconName} = lazy(async () => await import("${iconComponentsOutput.substring(1) + iconName.replace(".tsx", "")}"))\n`
}

function getIconComponentAsProperty(iconName) {
    return `${iconName} : ({className}) => <${iconName} className={className} />,\n`
}


function genRootIconComponent() {
    let iconComponentScript = `
    // AUTO GENERATED 
    import React, { lazy } from "react";
    export interface IconProps {
    className: string;
}\n`

    let iconKeys = "type iconKeys = "
    let lazyImports = ""
    let iconComponent = "const Icon: Record<iconKeys, React.FC<IconProps>> = {"

    fs.readdirSync(svgFolder).forEach(svgFileName => {
        if (!svgFileName.endsWith(".svg")) return;
        const iconName = path.parse(svgFileName).name;
        const formattedIconName = formatIconName(iconName);

        iconKeys += `"${formattedIconName}" | `
        lazyImports += getLazyImport(formattedIconName)
        iconComponent += getIconComponentAsProperty(formattedIconName)

        const svgCode = fs.readFileSync(svgFolder + "/" + svgFileName, "utf-8")
        genIconComponent(formattedIconName, svgCode)
    })
    iconKeys = iconKeys.slice(0, -3).concat(";")
    iconComponentScript += `${iconKeys}\n\n ${lazyImports}\n ${iconComponent}} \n export default Icon;`

    fs.writeFileSync(rootIconOutput, iconComponentScript, {
        flag: "w+"
    })
}

function formatIconName(iconName = "") {
    iconName = CaseConverter.toPascalCase(iconName)
    iconName = iconName.replace("Icon", "")
    return iconName
}

function genIconComponent(iconName = "", svgCode = "") {
    svgCode = svgCode.replace("<svg ", "<svg className={className} ")
    svgCode = svgCode.replace(/width=.[^ ]*/, "").replace(/height=.[^ ]*/, "")
    const iconScript = `
// AUTO GENERATED
import React from "react";
import {IconProps} from "../Icon";
const ${iconName}: React.FC <IconProps > = ({className}) => <div>${svgCode}</div>
export default ${iconName};
`
    const formattedIconName = formatIconName(iconName).replace("Svg", "")
    fs.writeFileSync(iconComponentsOutput + formattedIconName + ".tsx", iconScript, {
        flag: "w+"
    })
}

genRootIconComponent()