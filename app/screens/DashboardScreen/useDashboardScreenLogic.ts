import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

export function useDashboardScreenLogic() {
    const navigation = useNavigation();
    const route = useRoute();

    const [loading, setLoading] = useState();

    return {
        loading,
    };
}
