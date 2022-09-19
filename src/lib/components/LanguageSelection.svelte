<script lang="ts">
    import {chosenLanguageStore, updateMinecraftLanguageStore} from "$lib/stores/languageStore.js";
    import {updateSearch} from "$lib/setup/initializeSearch";

    let chosenLanguage
    const onChange = () => {
        $chosenLanguageStore = chosenLanguage;
        updateMinecraftLanguageStore(chosenLanguage);
        updateSearch();
    }
</script>

<select bind:value={chosenLanguage} id="color" name="color" on:change={onChange}>
    <option value="en_us">English</option>
    <option value="es_es">Spanish</option>
    <option value="ja_jp">Japanese</option>
    <option value="ko_kr">Korean</option>
    <option value="ru_ru">Russian</option>
    <option value="zh_cn">Chinese - Simplified</option>
    <option value="zh_tw">Chinese - Traditional</option>
</select>