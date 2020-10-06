import React from "react";
import { Text, Shimmer, Image, ImageFit } from "@fluentui/react";
import { Card } from "@uifabric/react-cards";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { changeAPIDefinition } from "../../api/actions";
import { APIDisplay, mapStringStoreToItems } from "./APIDisplay";
import { updateEmojis } from "../../api/emojis/actions";
import { getTheme } from "../../themes";
import toast from "../../toast";

const mapState = (state: RootState) => ({
    theme: getTheme(state.prefs.theme),
    locale: null,
    operationID: "listEmojis",
    name: "Emoji",
    results: mapStringStoreToItems(state.emojis),
});

const mapDispatchToProps = { changeAPIDefinition, updateItems: updateEmojis };

const connector = connect(mapState, mapDispatchToProps);

class Emojis extends APIDisplay {
    onCardClick = (event: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => {
        if (event === undefined) {
            return;
        }

        const card = (event.target as HTMLElement).closest(".ms-List-cell");

        if (card === null) {
            return;
        }

        const pre = card.querySelector(".names");

        if (pre === null) {
            return;
        }

        const names = pre.innerHTML.split(" ");
        const name = names[names.length - 1];
        navigator.clipboard.writeText(name).then(() => {
            toast(this.props.theme, `Emoji (${name}) copied to clipboard!`);
        });
    };

    getNames = (item: any) => {
        let names = "";
        item.names.forEach((element: string, index: number) => {
            if (index === 2) {
                names += "\n";
            }

            names += `:${element}: `;
        });

        return names.trim();
    };

    renderCardImage = (item: any) => {
        if (item !== undefined) {
            return (
                <Image
                    imageFit={ImageFit.centerCover}
                    maximizeFrame={true}
                    shouldFadeIn={true}
                    src={item.image_url}
                    className="card-preview"
                    alt={`emoji ${item.names[0]}`}
                    onClick={this.onCardClick}
                ></Image>
            );
        }
        return <div></div>;
    };

    renderCardDetails = (item: any) => {
        const loaded = item !== undefined;

        return (
            <Card.Section>
                <Shimmer isDataLoaded={loaded} width={110}>
                    {loaded && (
                        <Text onClick={this.onCardClick}>
                            {this.props.t("In-game Name", { count: item.names.length })}:
                        </Text>
                    )}
                </Shimmer>
                <Shimmer isDataLoaded={loaded} width={150}>
                    {loaded && (
                        <Text variant="tiny" onClick={this.onCardClick}>
                            <pre className="names">{this.getNames(item)}</pre>
                        </Text>
                    )}
                </Shimmer>
            </Card.Section>
        );
    };
}

export default connector(withTranslation()(Emojis));
