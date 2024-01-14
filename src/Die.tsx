import {useEffect} from "react"

interface DieProps {
    id: string;
    src: string;
    value: string;
    setSoundName: (p: string) => void;
}

export default function Die(props: DieProps){


    function handleClick(){
        const element = document.getElementById(props.value) as HTMLMediaElement;
                if (!element) {
                    throw new Error('Missing element')
                    }
                element.play();
                props.setSoundName(props.id)
    }

    useEffect(() => {
        document.addEventListener('keydown', 
        (e: KeyboardEvent) => {
            if (e.key.toUpperCase() == props.value){
                const element = document.getElementById(props.value) as HTMLMediaElement;
                if (!element) {
                    throw new Error('Missing element')
                    }
                element.play();
                props.setSoundName(props.id)
                }
            }
        )
    }, [])

    return(
        <div>
        <button tabIndex={0} className="drum-pad" id={props.id} value={props.value} onClick={handleClick}>{props.value}
        <audio id={props.value} className="clip" src={props.src}></audio>
        </button>
        
        </div>
    )

}