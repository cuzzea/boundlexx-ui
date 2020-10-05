import React from "react";
import { Text } from "@fluentui/react";
import { Card } from "@uifabric/react-cards";
import { RootState } from "../../store";
import { connect, ConnectedProps } from "react-redux";
import { withTranslation } from "react-i18next";
import { changeAPIDefinition } from "../../api/actions";
import { APIDisplay, APIDisplayProps, mapStringStoreToItems } from "./APIDisplay";
import { updateEmojis } from "../../api/emojis/actions";

const mapState = (state: RootState) => ({
    theme: state.prefs.theme,
    locale: null,
    operationID: "listEmojis",
    name: "Emojis",
    items: mapStringStoreToItems(state.emojis),
});

const mapDispatchToProps = { changeAPIDefinition, updateItems: updateEmojis };

const connector = connect(mapState, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = APIDisplayProps & PropsFromRedux;

class Emojis extends APIDisplay<Props> {
    renderCardImage(item: any, index: number | undefined) {
        return <img src={item.image_url} className="card-preview" alt={`emoji ${item.names[0]}`}></img>;
    }

    renderCardDetails(item: any, index: number | undefined) {
        let names = "";
        item.names.forEach((element: string, index: number) => {
            if (index === 2) {
                names += "\n";
            }

            names += `:${element}: `;
        });

        return (
            <Card.Section>
                <Text>{this.props.t("In-game Names")}:</Text>
                <Text variant="tiny">
                    <pre>{names.trim()}</pre>
                </Text>
            </Card.Section>
        );
    }
}

export default connector(withTranslation()(Emojis));
