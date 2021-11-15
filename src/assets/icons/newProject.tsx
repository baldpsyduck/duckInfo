interface iconProps extends React.HTMLProps<HTMLSpanElement>{
    width?: string | number;
    height?: string | number;
    fill?: string;
    className?: string;
    style?:React.CSSProperties;
}

export default function NewProject(props:iconProps){
    
    const className = props.className
    const fontSize = props.style?.fontSize
    const color = props.style?.color
    const fill = props.fill

    return (
        <span className={`${className} anticon`} role="img" aria-label="upload">
           <svg  className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2392" width={fontSize?fontSize:"20"} height={fontSize?fontSize:"20"}><path d="M215.9 926.5v-88.8h-88.8V97.5h681v88.8h88.8v740.2h-681z m547.8-784.6H171.5v651.4h44.4v-607h547.7v-44.4z m88.8 88.8H260.3V364h592.1V230.7z m0 177.7H260.3v473.7h592.1V408.4z m-288.7 59.2c102.2 0 185 82.8 185 185s-82.8 185-185 185-185-82.8-185-185 82.8-185 185-185z m0 325.7c77.7 0 140.6-63 140.6-140.6S641.5 512 563.8 512c-77.7 0-140.6 63-140.6 140.6s62.9 140.7 140.6 140.7z m-22.2-236.9H586v74h74v44.4h-74v74h-44.4v-74h-74v-44.4h74v-74z m59.2-236.8h-296v-44.4h296.1v44.4z" p-id="2393" fill={color?color:fill}></path></svg>
        </span>
    );
}

 
