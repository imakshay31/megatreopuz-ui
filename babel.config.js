module.exports = {
    presets: ["next/babel"],
    plugins: [
        [
            "transform-import",
            {
                libraryName: "@material-ui/core",
                libraryDirectory: "",
                camel2DashComponentName: false,
            },
            "@material-ui/core",
        ],
        [
            "transform-import",
            {
                libraryName: "@material-ui/styles",
                libraryDirectory: "",
                camel2DashComponentName: false,
            },
            "@material-ui/styles",
        ],
        [
            "transform-import",
            {
                libraryName: "@material-ui/icons",
                libraryDirectory: "",
                camel2DashComponentName: false,
            },
            "@material-ui/icons",
        ],
        [
            "relay",
            {
                artifactDirectory: "./src/__generated__",
            },
        ],
    ],
};
