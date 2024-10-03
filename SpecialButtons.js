
import { useState } from "react";

const SpecialButtons = () => {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    return ( 
        <>  
            <button onClick={() => setLike(like + 1)}>
                Like {like}
            </button>
            <button onClick={() => setDislike(dislike + 1)}>
                Dislike {dislike}
            </button>     
        </>
    );
};

export default SpecialButtons;