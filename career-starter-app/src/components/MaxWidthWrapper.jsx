export default function MaxWidthWrapper({ children, val }){
    return (
        <div className="w-full">
            <div style={{
                maxWidth: val,
                margin: "auto"
            }}>
                { children }
            </div>
        </div>
    );
}