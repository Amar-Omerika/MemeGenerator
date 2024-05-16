function GenericButton({
  customOnClick,
  buttonIcon,
  customStyle,
  buttonText
}: {
  customOnClick: () => void
  buttonIcon: string
  customStyle?: React.CSSProperties
  buttonText: string
}) {
  return (
    <div
      className="mt-4 flex w-full flex-row items-center justify-center rounded-full border-4 border-darkBrown bg-[#fdf6e7] py-4 text-xl font-bold text-darkBrown transition-transform duration-300 hover:scale-95"
      onClick={() => customOnClick()}
      style={customStyle}
    >
      <img src={buttonIcon} alt="ResetIcon" className="mr-4 size-5" />
      <button className="font-extrabold">{buttonText}</button>
    </div>
  )
}

export default GenericButton
