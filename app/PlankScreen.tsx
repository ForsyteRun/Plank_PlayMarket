import PlankScreenContent from "@/components/PlankScreenContent";
import Header from "@/components/shared/Header";
import { useCustomPlankManage, useParsedParams } from "@/hooks";
import type { IPLank } from "@/types/plank";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function PlankScreen() {
  const { bottom } = useSafeAreaInsets();

  const plank = useParsedParams<IPLank>("data");

  if (!plank) return null;

  const {
    submittedTitle,
    isSubmitted,
    selectedPlanks,
    setSelectedPlanks,
    setTitle,
    handleEdit,
  } = useCustomPlankManage(plank.title);

  return (
    <SafeAreaView
      style={{ paddingBottom: bottom + 40 }}
      edges={["bottom"]}
      className="flex-1 bg-white"
    >
      <Header
        title={submittedTitle || plank.title}
        editEnabled={plank.editEnabled}
        isSubmitted={isSubmitted}
        handleEdit={handleEdit}
      />
      <PlankScreenContent
        {...{
          plank,
          isSubmitted,
          submittedTitle,
          selectedPlanks,
          setTitle,
          setSelectedPlanks,
        }}
      />
    </SafeAreaView>
  );
}
