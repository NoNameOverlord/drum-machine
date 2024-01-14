import {useEffect} from "react"

export default function Die(props){


    function handleClick(){
        document.getElementById(props.value)?.play()
        props.setSoundName(props.id)
    }

    useEffect(() => {
        document.addEventListener('keydown', 
        (e: KeyboardEvent) => {
            if (e.key.toUpperCase() == props.value){
                document.getElementById(props.value)?.play()
                props.setSoundName(props.id)
            }
        }
        )
    }, [])

    return(
        <div>
        <button tabIndex={0} className="drum-pad" id={props.id} value={props.value} onClick={handleClick}>{props.value}
        <audio id={props.value} className="clip" src={props.src} type="audio/mpeg"></audio>
        </button>
        
        </div>
    )

}