import NewPlankForm from "@/components/NewPlankForm";
import NewPlankHeader from "@/components/NewPlankHeader";
import PlankBannerList from "@/components/PlankBannerList";
import SubmitInfo from "@/components/shared/SelectedExerciceBannerLIst/components/SubmitInfo";
import { useExerciseSetManage } from "@/hooks";
import { sumExerciceTimes } from "@/utils/sumExerciceTimes";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const INIT_TITLE = "Новое Упражнение";
const EDIT = "Редактировать";

export default function NewPlankScreen() {
  const { bottom } = useSafeAreaInsets();

  const {
    edit,
    title,
    submitted,
    submittedTitle,
    localExercises,

    setTitle,

    handleEdit,
    handleSubmit,
  } = useExerciseSetManage(INIT_TITLE);

  const totalExercicesTime = sumExerciceTimes(localExercises);
  return (
    <SafeAreaView
      style={{ paddingBottom: bottom + 40 }}
      edges={["bottom"]}
      className="flex-1 bg-white"
    >
      <NewPlankHeader
        title={edit ? EDIT : submittedTitle || INIT_TITLE}
        submitted={submitted}
        handleSubmit={handleSubmit}
        handleEdit={handleEdit}
      />
      {submitted ? (
        <SubmitInfo totalExercicesTime={totalExercicesTime} />
      ) : (
        <NewPlankForm
          edit={edit}
          title={title}
          totalExercicesTime={totalExercicesTime}
          setTitle={setTitle}
        />
      )}

      <PlankBannerList submitted={submitted} />
    </SafeAreaView>
  );
}
