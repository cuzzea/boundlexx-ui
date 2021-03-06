import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Components } from "api/client";
import { Card } from "@uifabric/react-cards";
import { getTheme } from "themes";
import { Shimmer, Text, Image, ImageFit } from "@fluentui/react";
import toast from "toast";
import { Mutex } from "async-mutex";

interface BaseProps {
    emoji: Components.Schemas.Emoji | undefined;
}

type Props = BaseProps & WithTranslation;

const copyLock = new Mutex();
const Component: React.FunctionComponent<Props> = (props) => {
    const theme = getTheme();

    const onCardClick = (event: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => {
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

        if (!copyLock.isLocked()) {
            copyLock.runExclusive(async () => {
                const names = pre.innerHTML.split(" ");
                const name = names[names.length - 1];
                await navigator.clipboard.writeText(name);

                const message = (
                    <Text>
                        Emoji (<pre style={{ display: "inline" }}>{name}</pre>) copied to clipboard!
                    </Text>
                );

                toast(message);
            });
        }
    };

    const getNames = (item: Components.Schemas.Emoji) => {
        let names = "";
        item.names.forEach((element: string, index: number) => {
            if (index === 2) {
                names += "\n";
            }

            names += `:${element}: `;
        });

        return names.trim();
    };

    return (
        <Card
            className="api-card"
            data-is-focusable
            horizontal
            tokens={{ childrenMargin: 5 }}
            style={{ borderColor: theme.palette.themePrimary }}
            styles={{
                root: {
                    backgroundColor: theme.palette.neutralLighter,
                    margin: 2,
                    position: "relative",
                    padding: 2,
                    width: 300,
                    height: 68,
                },
            }}
            onClick={onCardClick}
        >
            <Card.Item
                fill
                styles={{
                    root: {
                        width: 60,
                        height: 60,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                }}
            >
                <Shimmer
                    className="card-preview"
                    isDataLoaded={props.emoji !== undefined}
                    styles={{
                        root: {
                            width: 57,
                            height: 57,
                            display: "inline-flex",
                            marginTop: 4,
                        },
                        dataWrapper: {
                            height: "100%",
                            width: "100%",
                        },
                    }}
                >
                    {props.emoji !== undefined && props.emoji.image_url !== null && (
                        <Image
                            imageFit={ImageFit.centerContain}
                            maximizeFrame={true}
                            shouldFadeIn={true}
                            src={props.emoji.image_url}
                            className="card-preview"
                            alt={`emoji ${props.emoji.names[0]}`}
                            onClick={onCardClick}
                        ></Image>
                    )}
                </Shimmer>
            </Card.Item>
            <Card.Section>
                <Shimmer isDataLoaded={props.emoji !== undefined} width={110}>
                    {props.emoji !== undefined && (
                        <Text onClick={onCardClick}>
                            {props.t("In-game Name", { count: props.emoji.names.length })}:
                        </Text>
                    )}
                </Shimmer>
                <Shimmer isDataLoaded={props.emoji !== undefined} width={150}>
                    {props.emoji !== undefined && (
                        <Text variant="tiny" onClick={onCardClick}>
                            <pre className="names">{getNames(props.emoji)}</pre>
                        </Text>
                    )}
                </Shimmer>
            </Card.Section>
        </Card>
    );
};

export const EmojiCard = withTranslation()(Component);
