import { useState } from 'react'
import InputBox from './componenets/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#132A1E] relative overflow-hidden">
      {/* subtle ledger-line texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 32px)',
        }}
      />

      <div className="relative w-full max-w-md mx-4">
        <div className="relative bg-[#F3EDE0] rounded-sm border border-[#C9A227] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          {/* corner registration marks */}
          <span className="absolute -top-2 -left-2 text-[#C9A227] text-lg leading-none select-none">+</span>
          <span className="absolute -top-2 -right-2 text-[#C9A227] text-lg leading-none select-none">+</span>
          <span className="absolute -bottom-2 -left-2 text-[#C9A227] text-lg leading-none select-none">+</span>
          <span className="absolute -bottom-2 -right-2 text-[#C9A227] text-lg leading-none select-none">+</span>

          <div className="mb-6 text-center">
            <h1
              className="text-[#132A1E] text-2xl tracking-tight"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
            >
              Currency Exchange
            </h1>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8A7B4E] mt-1">
              Live conversion ledger
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            <div className="w-full mb-2">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="relative w-full h-0 flex justify-center">
              <button
                type="button"
                onClick={swap}
                aria-label="Swap currencies"
                className="relative -translate-y-1/2 z-10 w-10 h-10 rounded-full
                           bg-gradient-to-b from-[#E8C765] to-[#B8860B]
                           border border-[#8A6A0B] text-[#132A1E] font-bold
                           flex items-center justify-center shadow-md
                           transition-transform duration-300 hover:rotate-180 active:scale-95"
              >
                ⇄
              </button>
            </div>

            <div className="w-full mt-2 mb-6">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#132A1E] hover:bg-[#1B3A29] text-[#E8C765]
                         font-semibold tracking-wide text-sm uppercase
                         px-4 py-3 rounded-sm border border-[#C9A227]
                         transition-colors active:scale-[0.99]"
            >
              Convert {from.toUpperCase()} → {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App