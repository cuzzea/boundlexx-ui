import React from "react";
import { Text, Shimmer, ImageFit, Image } from "@fluentui/react";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import * as api from "../../api";
import { APIDisplay, mapNumericStoreToItems } from "./APIDisplay";
import { getTheme } from "../../themes";
import { NumberDict, StringDict } from "../../types";
import { Components } from "../../api/client";
import { withRouter } from "react-router-dom";

const mapState = (state: RootState) => {
    return {
        theme: getTheme(state.prefs.theme),
        locale: null,
        loadAll: true,
        results: mapNumericStoreToItems(state.worlds),
        name: "World",
        operationID: "listWorldsSimple",
        extraFilters: [{ name: "show_inactive", value: true, in: "query" }],
    };
};

const mapDispatchToProps = { changeAPIDefinition: api.changeAPIDefinition, updateItems: api.updateWorlds };

const connector = connect(mapState, mapDispatchToProps);

const TierNameMap = ["Placid", "Temperate", "Rugged", "Inhospitable", "Turbulent", "Fierce", "Savage", "Brutal"];

const TypeNameMap: StringDict<string> = {
    LUSH: "Lush",
    METAL: "Metal",
    COAL: "Coal",
    CORROSIVE: "Corrosive",
    SHOCK: "Shock",
    BLAST: "Blast",
    TOXIC: "Toxic",
    CHILL: "Chill",
    BURN: "Burn",
    DARKMATTER: "Umbris",
    RIFT: "Rift",
    BLINK: "Blink",
};

const SizeMap: NumberDict<string> = {
    192: "3km",
    288: "4.5km",
    384: "6km",
};

const SpecialTypeMap = ["", "Color-Cycling"];

class Worlds extends APIDisplay {
    onCardClick = (event: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => {
        if (event === undefined) {
            return;
        }

        const card = (event.target as HTMLElement).closest(".ms-List-cell");

        if (card === null) {
            return;
        }

        const details = card.querySelector(".world-card");

        if (details === null) {
            return;
        }

        const id = details.getAttribute("data-world-id");

        if (id === null) {
            return;
        }

        this.props.history.push(`/worlds/${id}/`);
    };

    renderCardImage = (item: Components.Schemas.KindOfSimpleWorld) => {
        if (item === undefined) {
            return <div></div>;
        }

        return (
            <Image
                imageFit={ImageFit.centerCover}
                maximizeFrame={true}
                shouldFadeIn={true}
                src={item.image_url || "https://cdn.boundlexx.app/worlds/unknown.png"}
                className="card-preview"
                alt={item.text_name || item.display_name}
            ></Image>
        );
    };

    getStatusText = (item: Components.Schemas.KindOfSimpleWorld) => {
        return item.is_locked
            ? this.props.t("Locked")
            : item.active
            ? this.props.t("Active")
            : this.props.t("Inactive");
    };

    getSpecialType = (item: Components.Schemas.KindOfSimpleWorld) => {
        let specialType = "";
        if (item.special_type !== null && item.special_type > 0) {
            specialType = `${this.props.t(SpecialTypeMap[item.special_type])} `;
        }
        return specialType;
    };

    getWorldClass = (item: Components.Schemas.KindOfSimpleWorld) => {
        let worldClass = "Homeworld";
        if (item.is_creative) {
            worldClass = "Creative World";
        } else if (item.is_sovereign) {
            worldClass = "Sovereign World";
        } else if (item.is_exo) {
            worldClass = "Exoworld";
        }
        return this.props.t(worldClass);
    };

    renderCardDetails = (item: Components.Schemas.KindOfSimpleWorld) => {
        const loaded = item !== undefined;

        return (
            <div className="world-card" data-world-id={item.id}>
                <Shimmer isDataLoaded={loaded} width={80}>
                    {loaded && (
                        <Text>
                            <span dangerouslySetInnerHTML={{ __html: item.html_name || item.display_name }}></span>
                        </Text>
                    )}
                </Shimmer>
                <Shimmer isDataLoaded={loaded} width={150}>
                    {loaded && (
                        <Text variant="xSmall">
                            T{item.tier + 1} - {this.props.t(TierNameMap[item.tier])}{" "}
                            {this.props.t(TypeNameMap[item.world_type])} {this.getSpecialType(item)}{" "}
                            {this.getWorldClass(item)}
                        </Text>
                    )}
                </Shimmer>
                <Shimmer isDataLoaded={loaded} width={60}>
                    {loaded && (
                        <Text variant="tiny">
                            {this.props.t("ID")}: {item.id}, {SizeMap[item.size]}, {this.getStatusText(item)}
                        </Text>
                    )}
                </Shimmer>
            </div>
        );
    };
}

export default connector(withRouter(withTranslation()(Worlds)));
