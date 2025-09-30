import { useOpen } from "@/hooks";
import { useRouter } from "expo-router";
import { Dispatch, SetStateAction, memo } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AttentionModal from "../AttentionModal";
import HeaderContent from "./components/HeaderContent";

interface INewPlankHeaderProps {
  title: string;
  isSubmitted: boolean;
  editEnabled?: boolean;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
}

const Header = memo(
  ({
    title,
    isSubmitted,
    editEnabled,
    setIsSubmitted,
  }: INewPlankHeaderProps) => {
    const { top } = useSafeAreaInsets();

    const router = useRouter();
    const { isOpen, handleOpen } = useOpen();

    // const localExercises = useSelector(
    //   (state: RootState) => state.exercises.localExercises
    // );

    // console.log("Header", localExercises);

    const handleBack = () => {
      // if (isDrawerHeader(headerProps)) {
      //   navigation.navigate("index");
      // } else {
      router.push("/(drawer)");
      // }
      // if (!editEnabled) {
      //   // router.push("/(drawer)");
      //   return;
      // }

      // if (submitted) {
      //   handleSubmit();

      //   // router.push("/(drawer)");
      // } else {
      //   handleOpen();
      // }
    };

    const handleYes = () => {
      handleOpen();

      // router.push("/(drawer)");
    };

    return (
      <View>
        <View
          style={{ paddingTop: top + 11 }}
          className="w-full flex-row items-end justify-between bg-PRIMARY pr-4 pb-4"
        >
          <HeaderContent
            title={title}
            isSubmitted={isSubmitted}
            handleBack={handleBack}
            editEnabled={editEnabled}
            setIsSubmitted={setIsSubmitted}
          />
        </View>
        <AttentionModal
          title="Отменить?"
          text="Вы уверены что хотите отменить изменения?"
          noBtn="Нет"
          yesBtn="Да"
          isOpen={isOpen}
          handleOpen={handleOpen}
          handleYes={handleYes}
        />
      </View>
    );
  }
);

export default Header;
