'use client'
import React, {useEffect, useState} from 'react'
import {DeviceSettings, useCall, VideoPreview} from "@stream-io/video-react-sdk";
import {Button} from "@/components/ui/button";

const MeetingSetup = ({setIsSetupComplete} : {setIsSetupComplete: (value: boolean) => void}) => {
    const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false)

    const call = useCall();

    if (!call) {
        throw new Error('useCall must be used within StreamCall Component');
    }

    useEffect(() => {
        if(isMicCamToggledOn){
            call?.camera.disable();
            call?.microphone.disable();
        }else {
            call?.microphone.enable();
            call?.camera.enable();
        }
    },[isMicCamToggledOn, call?.camera, call?.microphone])

    return (
        <div className="flex h-screen flex-col items-center text-white w-full justify-center gap-3">
            <h1 className='text-2xl font-bold'>Setup</h1>
            <VideoPreview />
            <div className="flex h-16 items-center justify-center gap-3">
                <label className='flex items-center justify-center gap-2 font-medium'>
                    <input type='checkbox' checked={isMicCamToggledOn} onChange={(e) => {setIsMicCamToggledOn(e.target.checked)}}/>
                    Join with Microphone and Camera off
                </label>
                <DeviceSettings />
            </div>
            <Button className="rounded-md bg-green-500 px-4 py-2.5" onClick={() => {
                call?.join();

                setIsSetupComplete(true)
            }}>
                Join Meeting
            </Button>
        </div>
    )
}
export default MeetingSetup