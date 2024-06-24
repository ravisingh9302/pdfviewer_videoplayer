
import React, { useEffect, useState } from 'react'
import { Player, BigPlayButton, ControlBar, PlayToggle, ReplayControl, ForwardControl, VolumeMenuButton, PlaybackRateMenuButton, ClosedCaptionButton } from 'video-react';


function Vedio_player_1({ vediolink, vedioupload }) {
  console.log(vediolink, "vedio 1", vedioupload)
  const [vurl, setvurl] = useState(null)

  useEffect(() => {
    fileProcess()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vediolink, vedioupload])


  const fileProcess = async (e) => {
    if (vediolink && vedioupload) {
      return;
    }
    if (!vediolink && !vedioupload) {
      return;
    }
    if (vediolink) {
      setvurl(vediolink)
    };
    if (vedioupload) {
      console.log("selectedFile: ", vedioupload);
      let reader = new FileReader();
      reader.readAsDataURL(vedioupload);
      reader.onload = (e) => {
        // console.log("AfterReader:", e.target.result)
        setvurl(e.target.result);
      };
    }
  }


  return (
    <>

      {/* <Player src="" style={{ border: "2px solid red" }} width={500} muted={true} fluid={false} ref={(player) => { }} >

           <BigPlayButton position="center" />
             <ControlBar autoHide={true} className="my-class" disableDefaultControls={true} >
                  <PlayToggle />
                  <VolumeMenuButton vertical order={2} />
                   <ReplayControl seconds={30} order={3.0} />                   <ForwardControl seconds={30} order={3.1} />
                    <PlaybackRateMenuButton rates={[2.5, 1.75, 1.5, 1.25, 1, 0.75]} order={4.0} />
                   <ClosedCaptionButton order={7} />
                </ControlBar>
            </Player> */}

      {vurl &&
        <Player>
        <source src={vurl} />
        <BigPlayButton position='center'/>
      </Player>
      }
      {
        !vurl && <div>No vedio to show</div>
      }

    </>
  )
}

export default Vedio_player_1

