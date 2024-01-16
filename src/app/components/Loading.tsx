import classes from '@/app/components/animation/Loading.module.scss'
export default function Loading() {

    return (
        <div className='h-screen grid grid-cols-1 place-items-center w-full'>
        <div className={`${classes.terminalLoader}`}>
        <div className={`${classes.terminalHeader}`}>
        <div className={`${classes.terminalTitle}`}>Status</div>
        <div className={`${classes.terminalControls}`}>
        <div className={`${classes.control}-${classes.close}`}></div>
        <div className={`${classes.control}-${classes.minimize}`}></div>
        <div className={`${classes.control}-${classes.maximize}`}></div>
        </div>
        </div>
        <div className={`${classes.text}`}>Loading...</div>
        </div>

        </div>
    )
}