// filter classes based on theme mode
const toggleThemeBaseClasses = (classString, isDark) => {
    if (isDark) return classString;

    return classString.replace(/\s+dark:[^\s"]+/g, '');
};

export default toggleThemeBaseClasses;