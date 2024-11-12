const switchMode = ()=>{

    const [modeOfScreen, setModeOfScreen] = useState("Day");

    return setModeOfScreen(modeOfScreen == "Day" ? "Night": "Day")
    
}

export default switchMode