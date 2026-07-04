import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId()

  return (
    <div className={`bg-white border border-[#D8CBA0] p-3 rounded-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-[9px] uppercase tracking-[0.2em] text-[#8A7B4E] mb-1 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1 text-[#132A1E] text-xl font-medium
                     tabular-nums disabled:opacity-50"
          type="number"
          placeholder="0.00"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-col items-end justify-between">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[#8A7B4E] mb-1">Currency</p>
        <select
          className="rounded-sm px-2 py-1 bg-[#F3EDE0] border border-[#C9A227]/60
                     cursor-pointer outline-none uppercase text-xs font-semibold
                     text-[#132A1E] tracking-wide"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox