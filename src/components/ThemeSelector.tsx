import { IDropdownOption, Dropdown, IDropdownStyles } from '@fluentui/react';
import React from 'react';
import { RootState } from '../store';
import { connect, ConnectedProps } from 'react-redux';
import { changeTheme } from '../prefs/actions';
import { withTranslation, WithTranslation } from 'react-i18next';
import { setTheme } from '../themes';

const mapState = (state: RootState) => ({
    theme: state.prefs.theme
});

const mapDispatchToProps = { changeTheme };

const connector = connect(mapState, mapDispatchToProps);

type Props = WithTranslation & ConnectedProps<typeof connector>;

class ThemeSelector extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.handleChange.bind(this);
        this.updateTheme.bind(this);

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", () => {
            this.updateTheme();
        });
    }

    handleChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
        if (option !== undefined) {
            this.updateTheme(option.key.toString());
        }
    }

    updateTheme = (theme?: string) => {
        if (theme !== undefined) {
            this.props.changeTheme(theme);
        }

        if (this.props.theme === "") {
            setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
        else {
            setTheme(this.props.theme === "dark");
        }
    }

    render() {
        setTimeout(() => {
            this.updateTheme();
        }, 10);

        const themeOptions: IDropdownOption[] = [
            { key: "", text: this.props.t("Browser Selected") },
            { key: "light", text: this.props.t("Light") },
            { key: "dark", text: this.props.t("Dark") }
        ];

        return (
            <Dropdown
                label="Theme"
                defaultSelectedKey={this.props.theme}
                options={themeOptions}
                onChange={this.handleChange}
                styles={{dropdown: {width: 300}}}
            />
        );
    }
}

export default connector(withTranslation()(ThemeSelector));
