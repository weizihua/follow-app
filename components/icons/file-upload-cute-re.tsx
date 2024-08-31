import type { Ref } from 'react'
import { forwardRef, memo } from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'

function SvgFileUploadCuteRe(props: SvgProps, ref: Ref<Svg>) {
  return <Svg width={24} height={24} fill="none" ref={ref} {...props}><Path fill="currentColor" d="M13 12a1 1 0 1 0-2 0zm-2 5a1 1 0 1 0 2 0zm-2.038-3.398a1 1 0 1 0 1.834.798zm4.242.798a1 1 0 1 0 1.834-.798zm.32-7.587.988-.157zm1.663 1.662.157-.987zm-2.181-5.893-.165.987zm2.492 1.033-.58.814zM5.962 20.592l-.634.773zm-.554-.554.773-.635zm6.2-7.968-.477-.879zm.783 0 .478-.879zM12 11.927v-1zm6.592 8.11.773.635zm-.554.555-.635-.773zm1.38-11.598-.987.165zm-1.033-2.492-.814.58zm.115 4.534V14h2v-2.964zM5.5 14V8.668h-2V14zm5.168-10.5h.297v-2h-.297zm1.832 2v.6h2v-.6zm3.4 4h.6v-2h-.6zM11 12v5h2v-5zm-.204 2.4c.303-.698.698-1.13 1.29-1.451l-.955-1.758c-1.013.551-1.701 1.336-2.17 2.411zm1.118-1.451c.592.322.986.753 1.29 1.451l1.834-.798c-.468-1.075-1.156-1.86-2.17-2.41zM16.5 9.5a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm-4-3.4c0 .333-.003.617.037.87l1.975-.314c-.009-.058-.012-.146-.012-.556zm3.4 1.4c-.41 0-.498-.003-.556-.012l-.313 1.975c.252.04.536.037.869.037zm-3.363-.53a3 3 0 0 0 2.494 2.493l.313-1.975a1 1 0 0 1-.832-.832zM14.5 5.5a4 4 0 0 0-4-4v2a2 2 0 0 1 2 2zm-3.536-2c1.067 0 1.486.003 1.877.069l.33-1.973c-.593-.1-1.207-.096-2.206-.096zm6.743.793C17 3.586 16.57 3.15 16.08 2.8l-1.161 1.628c.323.23.621.524 1.375 1.278zm-4.866-.724a5 5 0 0 1 2.077.86l1.16-1.628a7 7 0 0 0-2.907-1.205zM12 20.5c-1.668 0-2.831-.002-3.72-.107-.865-.102-1.338-.29-1.683-.574l-1.269 1.546c.76.625 1.663.89 2.718 1.015 1.032.122 2.335.12 3.954.12zM3.5 14c0 1.62-.002 2.922.12 3.954.125 1.055.39 1.957 1.015 2.718l1.546-1.269c-.284-.345-.472-.818-.574-1.684C5.502 16.831 5.5 15.67 5.5 14zm3.097 5.819a2.996 2.996 0 0 1-.416-.416l-1.546 1.269c.208.253.44.485.693.693zm5.49-6.87a4.29 4.29 0 0 1 .095-.052l.012-.006a.5.5 0 0 1-.194.036v-2c-.427 0-.745.197-.869.264zm.782-1.758c-.124-.067-.442-.264-.869-.264v2a.565.565 0 0 1-.194-.036l.012.006.096.052zM18.5 14c0 1.668-.002 2.831-.107 3.72-.102.865-.29 1.338-.574 1.683l1.546 1.269c.625-.76.89-1.663 1.015-2.718.122-1.032.12-2.335.12-3.954zM12 22.5c1.62 0 2.922.002 3.954-.12 1.055-.125 1.957-.39 2.718-1.015l-1.269-1.546c-.345.284-.818.472-1.684.574-.887.105-2.05.107-3.719.107zm5.819-3.097a2.993 2.993 0 0 1-.416.416l1.269 1.546c.253-.208.485-.44.693-.693zm2.681-8.367c0-1 .003-1.614-.096-2.207l-1.973.33c.066.391.069.81.069 1.877zm-4.207-5.329c.754.754 1.048 1.053 1.278 1.375l1.628-1.16c-.349-.49-.785-.922-1.492-1.63zm4.11 3.122A7 7 0 0 0 19.2 5.921l-1.628 1.161a5 5 0 0 1 .86 2.077zM5.5 8.668c0-1.026 0-1.74.042-2.299.04-.548.116-.866.226-1.108l-1.822-.826c-.247.546-.35 1.127-.399 1.787C3.5 6.87 3.5 7.672 3.5 8.668zM10.668 1.5c-.996 0-1.797 0-2.446.047-.66.05-1.241.152-1.787.4l.826 1.82c.242-.109.56-.185 1.108-.225.558-.041 1.273-.042 2.299-.042zm-4.9 3.761A3 3 0 0 1 7.26 3.768l-.826-1.822a5 5 0 0 0-2.489 2.49z" /></Svg>
}
const ForwardRef = forwardRef(SvgFileUploadCuteRe)
const Memo = memo(ForwardRef)
export default Memo
