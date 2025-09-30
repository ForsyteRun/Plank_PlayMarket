import NewPlankForm from "@/components/NewPlankForm";
import PlankSelectWithModals from "@/components/PlankSelectWithModals";
import AnimatedContent from "@/components/shared/AnimatedContent";
import Header from "@/components/shared/Header";
import SelectablePlankList from "@/components/shared/SelectablePlankList";
import SubmitInfo from "@/components/shared/SubmitInfo";
import { useCustomPlankManage, useParsedParams } from "@/hooks";
import type { IPLank } from "@/types/plank";
import { sumExerciceTimes } from "@/utils/sumExerciceTimes";
import { Fragment } from "react";
import { Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function PlankScreen() {
  const { bottom } = useSafeAreaInsets();

  const plank = useParsedParams<IPLank>("data");

  if (!plank) return null;

  const { submittedTitle, isSubmitted, setTitle, handleEdit } =
    useCustomPlankManage(plank.title);

  const totalExercicesTime = sumExerciceTimes(plank.exercices);

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
      <AnimatedContent>
        {plank.editEnabled && !isSubmitted ? (
          <View
            className="pb-5 pt-2 bg-SECONDARY"
            style={{ paddingHorizontal: 20 }}
          >
            <NewPlankForm
              title={submittedTitle || plank.title}
              setTitle={setTitle}
            />
            <Text className="text-teal-800">
              Общее время: {totalExercicesTime}
            </Text>
            <PlankSelectWithModals data={plank} submitted={false} />
          </View>
        ) : (
          <Fragment>
            <SubmitInfo totalExercicesTime={totalExercicesTime} />
            <SelectablePlankList data={plank} submitted={false} />
          </Fragment>
        )}
      </AnimatedContent>
    </SafeAreaView>
  );
}
