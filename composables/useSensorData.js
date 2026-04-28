import { ref, onMounted } from "vue";

export const useSensorData = () => {
  const data = ref({});

  const fetchData = async () => {
    try {
      const res = await fetch("https://your-app.onrender.com/data");
      const json = await res.json();
      data.value = json;
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ Run only on client
  onMounted(() => {
    fetchData(); // initial call
    setInterval(fetchData, 1000);
  });

  return { data };
};
