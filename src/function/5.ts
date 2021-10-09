export{};

function getText(name: string, ...rest: number[]) : string {
    return `${name}, ${rest}`;
}

console.log(getText('mike', 1,2,3));
