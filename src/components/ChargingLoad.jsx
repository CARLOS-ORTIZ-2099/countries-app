import { ColorRing } from 'react-loader-spinner'
import './charging-load.css'
export const ChargingLoad = () => {

  return (
    <div className='load-container'>
            <ColorRing
                visible={true}
                height="160"
                width="160"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#26A5D3', '#26A5D3', '#26A5D3', 'black', '#26A5D3']}
            />
    </div>
  )
  
}
