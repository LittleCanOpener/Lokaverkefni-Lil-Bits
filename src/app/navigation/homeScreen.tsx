import { useMultistepForm } from "@/components/navbar/multistep"
import FoodScreen from "./foodScreen"
import DrinksScreen from "./drinkScreen"
import DateScreen from "./dateScreen"
export default function HomeScreen() {
    const { steps, step, currentStepIndex, isFirstStep, back, next, isLastStep } = useMultistepForm([<FoodScreen />, <DrinksScreen />, <DateScreen />])
    return <>
        <div>
            <form>
                <div>  
                    {currentStepIndex + 1} / {steps.length}
                </div>
                {step}
                <div>
                    {!isFirstStep && 
                    <button 
                    type="button" 
                    onClick={back}>
                        Back
                    </button>}
                    <button 
                    type="button" 
                    onClick={next}>
                        {isLastStep ? "Finish" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    </>
}