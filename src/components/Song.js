const Song = (props) => {
    // { song : {name: songName, singer:whoSungIt} }

    const voteForSong = () => {
        //props.song.votes
        props.voteFunction();
    }

    //added a comment for GitHub Demo.

    return <li>{props.song.name} by {props.song.singer} : {props.song.votes}
        <button onClick={voteForSong}>vote</button>
    </li>
}

export default Song; 
