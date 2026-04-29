import { ref, onMounted, onUnmounted } from "vue";

export const useSensorData = () => {
  const data = ref({});
  let interval = null;

  const fetchData = async () => {
    try {
      const res = await fetch("/api/data", { cache: "no-store" });
      const json = await res.json();

      // simple safe update
      data.value = { ...json };

      console.log("Updated:", json);
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

  onMounted(() => {
    interval = setInterval(fetchData, 1000); // 🔥 slower = stable
  });

  onUnmounted(() => {
    clearInterval(interval);
  });

  return { data };
};
