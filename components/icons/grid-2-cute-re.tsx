import type { Ref } from 'react'
import { forwardRef, memo } from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'
import { useStyles } from 'react-native-unistyles'

function SvgGrid2CuteRe(props: SvgProps, ref: Ref<Svg>) {
  const {
    theme,
  } = useStyles()
  return <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" color={theme.colors.gray12} ref={ref} {...props}><Path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M20.5 5.75c0-.232 0-.348-.01-.446a2 2 0 0 0-1.794-1.794c-.098-.01-.214-.01-.446-.01h-2c-.232 0-.348 0-.446.01a2 2 0 0 0-1.794 1.794c-.01.098-.01.214-.01.446s0 .348.01.446a2 2 0 0 0 1.794 1.794c.098.01.214.01.446.01h2c.232 0 .348 0 .446-.01a2 2 0 0 0 1.794-1.794c.01-.098.01-.214.01-.446zM10 6.75c0-1.167 0-1.751-.236-2.193a2 2 0 0 0-.821-.82C8.5 3.5 7.917 3.5 6.75 3.5s-1.751 0-2.193.236a2 2 0 0 0-.82.821C3.5 5 3.5 5.583 3.5 6.75v2c0 1.167 0 1.751.236 2.193a2 2 0 0 0 .821.82C5 12 5.583 12 6.75 12s1.751 0 2.193-.236a2 2 0 0 0 .82-.821C10 10.5 10 9.917 10 8.75zM20.5 15.25c0-1.167 0-1.751-.236-2.193a2 2 0 0 0-.821-.82C19 12 18.417 12 17.25 12s-1.751 0-2.193.236a2 2 0 0 0-.82.821C14 13.5 14 14.083 14 15.25v2c0 1.167 0 1.751.236 2.193a2 2 0 0 0 .821.82c.442.237 1.026.237 2.193.237s1.751 0 2.193-.236a2 2 0 0 0 .82-.821c.237-.442.237-1.026.237-2.193zM10 18.25c0-.232 0-.348-.01-.446a2 2 0 0 0-1.794-1.794C8.098 16 7.982 16 7.75 16h-2c-.232 0-.348 0-.446.01a2 2 0 0 0-1.794 1.794c-.01.098-.01.214-.01.446s0 .348.01.446a2 2 0 0 0 1.794 1.794c.098.01.214.01.446.01h2c.232 0 .348 0 .446-.01a2 2 0 0 0 1.794-1.794c.01-.098.01-.214.01-.446z" /></Svg>
}
const ForwardRef = forwardRef(SvgGrid2CuteRe)
const Memo = memo(ForwardRef)
export default Memo