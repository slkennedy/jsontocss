# JSON to SCSS Selectors
Pass in a JSON object for a component written in BEM and get back a SCSS file with selectors in place.

## Input
```
{
    "name": "ux-link-panel",
    "modifiers": ["special", "horizontal", "important"],
    "elements": [
        {
            "name": "heading",
            "modifiers": ["uppercase"]
        },
        {
            "name": "description",
            "modifiers": ["note", "important"]
        },
        {
            "name": "items",
            "elements": [
                {
                    "name": "item",
                    "modifiers": ["external"],
                    "elements": [
                        {
                            "name": "icon",
                            "modifiers": ["small"]
                        },
                        {
                            "name": "link"
                        }
                    ]
                }
            ]
        }
    ]
}
```
## Output
```scss
.ux-link-panel {

    &--special {}

    &--horizontal {}

    &--important {}

    &__heading {

        &--uppercase {}
    }

    &__description {

        &--note {}

        &--important {}
    }

    &__items {

        &__item {

            &--external {}

            &__icon {

                &--small {}
            }

            &__link {}
        }
    }
}
```
