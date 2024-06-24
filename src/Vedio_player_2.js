import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

function Vedio_player_2({ vediolink, vedioupload }) {
    const [vediourl, setVediourl] = useState(null)
    console.log(vediolink, "Vedio 2", vedioupload)
    useEffect(() => {
        fileProcess()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [vediolink, vedioupload])

    const getVideoDuration = (file) =>{

        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const media = new Audio(reader.result);
                media.onloadedmetadata = () => {
                    resolve(media.duration);
                }
            };
            reader.readAsDataURL(file);
            reader.onerror = (error) => reject(error);
        });
        
    }
    const fileProcess = async (e) => {
        if (vediolink && vedioupload) {
            return;
        }
        if (!vediolink && !vedioupload) {
            return;
        }
        if (vediolink) {
            console.log('ravi')
            setVediourl(vediolink)

            {

                console.log("ravi singh")
                let du;
                let vi = document.createElement('video')
                vi.preload = 'metadata'
                vi.onloadeddata = function () {
                    console.log("onloadata")
                    window.URL.revokeObjectURL(vi.src);
                    du = vi.duration;
                    console.log("time", du)
                }
                // vi.src = URL.createObjectURL(vediolink)
                vi.src = vediolink

                // const duration = await getVideoDuration(vediolink);
                // console.log("time duration", duration)
            }
        };
        if (vedioupload) {

            console.log("selectedFile: ", vedioupload);
            const obj_url = URL.createObjectURL(vedioupload)  // blob http//: url
            console.log("objUrl", obj_url)

            let reader = new FileReader();
            reader.readAsDataURL(vedioupload);
            reader.onload = (e) => {
                // console.log("AfterReader:", e.target.result)
                console.log("AfterReader:")
                setVediourl(e.target.result);
            };

            const duration = await getVideoDuration(vedioupload);
            console.log("time duration", duration)
        }
    }

    // <ReactPlayer url={vediourl} controls playing={true} playbackRate={"1.0"} />

    return (
        <>
            {
                vediourl && <ReactPlayer url={vediourl} controls controlsList="nodownload" playing={true} playbackRate={"1.0"} />
            }
            {
                !vediourl && <div>No vedio to show</div>
            }
        </>
    )
}

export default Vedio_player_2