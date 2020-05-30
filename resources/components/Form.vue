<template>
    <div class="tw-w-full md:tw-flex md:tw-flex-row-reverse">
        <!-- header -->
        <div class="tw-w-full md:tw-w-1/4 md:tw-ml-6" v-show="activeStep < 3">
            <div
                class="tw-shadow-md tw-rounded tw-flex tw-flex-col tw-items-center tw-jusitfy-center"
            >
                <div
                    class="tw-border tw-rounded tw-font-bold tw-text-xl tw-w-full tw-text-center tw-bg-white"
                >Artikeln
                </div>
                <div
                    class="tw-w-full tw-flex"
                    v-for="(item, index) in products"
                    :key="item.name + index"
                >
                    <div
                        class="tw-flex tw-items-center tw-justify-start tw-px-3 tw-py-2 tw-w-full tw-border-b tw-cursor-pointer hover:tw-bg-green-100"
                        :class="{ 'tw-bg-green-100': activeProduct == index }"
                        @click="activeProduct = index; activePosition = 0;"
                    >
                        <img
                            class="tw-ml-0 tw-mr-3 tw-w-8"
                            style="max-height: 2rem; min-height: 2rem;"
                            :src="item.type.imagePath"
                            alt
                        />
                        <span v-text="item.name"></span>
                    </div>
                    <div
                        v-if="products.length > 1"
                        class="tw-flex tw-items-center tw-justify-center tw-px-3 tw-text-white tw-text-xs tw-z-10 tw-bg-red-500 tw-cursor-pointer tw-border hover:tw-bg-white hover:tw-text-red-500"
                        @click="removeProduct(index)"
                    >Entfernen
                    </div>
                </div>
                <div
                    class="tw-border-b hover:tw-border-green-500 hover:tw-text-green-500 tw-cursor-pointer tw-w-full tw-text-center"
                    @click="addProduct"
                >
                    <span>Hinzufügen</span>
                </div>
            </div>
            <div
                class="tw-shadow-md tw-rounded tw-flex tw-flex-col tw-items-center tw-jusitfy-center tw-my-6"
                v-if="product.positions.length"
                v-show="activeStep == 2"
            >
                <div
                    class="tw-border tw-font-bold tw-text-xl tw-w-full tw-text-center"
                >Veredelungspositionen
                </div>
                <div
                    class="tw-w-full tw-flex"
                    v-for="(item, index) in product.positions"
                    :key="item.name + index"
                >
                    <div
                        class="tw-flex tw-items-center tw-justify-start tw-px-3 tw-py-2 tw-w-full tw-border-b tw-cursor-pointer hover:tw-bg-green-100"
                        :class="{ 'tw-bg-green-100': activePosition == index }"
                        @click="activePosition = index"
                    >
                        <img
                            class="tw-ml-0 tw-mr-3 tw-w-8"
                            style="max-height: 2rem; min-height: 2rem;"
                            :src="item.imagePath"
                            alt
                        />
                        <span v-text="item.name"></span>
                    </div>
                    <div
                        v-if="product.positions.length > 1"
                        class="tw-flex tw-items-center tw-justify-center tw-px-3 tw-text-white tw-text-xs tw-z-10 tw-bg-red-500 tw-cursor-pointer tw-border hover:tw-bg-white hover:tw-text-red-500"
                        @click="product.removePosition(index); activePosition = 0;"
                    >Entfernen
                    </div>
                </div>
                <div
                    class="tw-border-b hover:tw-border-green-500 hover:tw-text-green-500 tw-cursor-pointer tw-w-full tw-text-center"
                    @click="product.addPosition(); activePosition = activePosition + 1;"
                >
                    <span>Hinzufügen</span>
                </div>
            </div>
        </div>

        <div class="tw-w-full md:tw-w-1/4 md:tw-ml-6" v-show="activeStep === 3">
            <div
                class="tw-shadow-md tw-rounded tw-flex tw-flex-col tw-items-center tw-jusitfy-center"
            >
                <div
                    class="tw-font-bold tw-text-xl tw-w-full tw-text-left tw-bg-white tw-px-3 tw-py-1 tw-border-b-2 tw-border-gray-300"
                >Artikeln
                </div>
                <div
                    class="tw-w-full tw-flex"
                    v-for="(item, index) in products"
                    :key="item.name + index"
                >
                    <div
                        class="tw-flex tw-items-center tw-justify-start tw-px-3 tw-py-3 tw-w-full tw-border-b tw-cursor-pointer hover:tw-bg-green-100"
                        :class="{ 'tw-bg-green-100': activeProduct == index }"
                        @click="activeProduct = index; activePosition = 0;"
                    >
                        <img
                            class="tw-ml-0 tw-mr-3 tw-w-8"
                            style="max-height: 2rem; min-height: 2rem;"
                            :src="item.type.imagePath"
                            alt
                        />
                        <span v-text="item.name"></span>
                    </div>
                </div>
            </div>
            <div
                class="tw-shadow-md tw-rounded tw-flex tw-flex-col tw-items-center tw-jusitfy-center tw-my-6"
                v-if="product.positions.length"
            >
                <div
                    class="tw-text-xl tw-w-full tw-text-left tw-px-3 tw-py-1 tw-border-b-2 tw-border-gray-300"
                >Veredelungspositionen
                </div>
                <div
                    class="tw-w-full tw-flex"
                    v-for="(item, index) in product.positions"
                    :key="item.name + index"
                >
                    <div
                        class="tw-flex tw-items-center tw-justify-start tw-px-3 tw-py-3 tw-w-full tw-border-b tw-cursor-pointer"
                    >
                        <img
                            class="tw-ml-0 tw-mr-3 tw-w-8"
                            style="max-height: 2rem; min-height: 2rem;"
                            :src="item.imagePath"
                        />
                        <span v-text="item.name"></span>
                    </div>
                </div>
            </div>
        </div>
        <!--  body -->
        <form
            class="tw-w-full md:tw-w-3/4 tw-mt-6 md:tw-mt-0 tw-p-4 tw-rounded tw-shadow-md"
            @submit.prevent="submit"
        >
            <div v-show="activeStep == 1">
                <div class="tw-mb-6">
                    <h3>PRODUKTAUSWAHL</h3>
                    <p class="tw-text-sm md:tw-text-base">
                        Bitte wählen Sie die gewünschte Produktart und geben alle wichtigen
                        Angaben dazu an. Sie können auch weitere Produkte hinzufügen
                        und jeweils unterschiedlich konfigurieren.
                    </p>
                </div>
                <div class="tw-my-3">
                    <div v-for="(type, index) in this.$root.productTypes" :key="type + index">
                        <h5>{{ index}}</h5>
                        <div class="tw-flex tw-flex-wrap tw-items-center tw-justify-start tw-mb-6">
                            <div
                                class="tw-border tw-rounded tw-py-2 tw-px-3 tw-mr-2 tw-mb-2 hover:tw-border-green-300"
                                :class="{ 'tw-border-green-300 tw-bg-green-300':  product.type.name == item.name}"
                                @click="product.type = item; product.category = index; product.name = item.name;"
                                v-for="item in type"
                                :key="item.name"
                            >
                                <img
                                    class="tw-w-8"
                                    style="max-height: 2rem; min-height: 2rem;"
                                    :src="item.imagePath"
                                    alt
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tw-my-6">
                    <label for="product_name">Geben Sie Ihrem Produkt einen aussagekräftigen Namen.</label>
                    <div class="tw-w-64">
                        <input type="text" name="product_name" v-model="product.name"/>
                    </div>
                </div>

                <div class="tw-my-6" v-if="product.category == 'Textilien'">
                    <label
                        :class="{ 'tw-text-red-500': this.form.errors.has('totalAmount-'+product.name) }"
                        for="product_sizes"
                    >
                        Bitte wählen Sie ggf. die genauen Größen und Mengen oder
                        geben die gewünschte Gesamtmenge bei "Total" an.
                    </label>
                    <div class="tw-flex tw-flex-wrap tw-items-center tw-justify-start">
                        <div
                            class="tw-w-16 tw-mr-2 tw-mb-2"
                            v-for="size in product.sizes"
                            :key="size.name"
                        >
                            <span>{{ size.name }}</span>
                            <input
                                type="number"
                                min="0"
                                v-model="size.value"
                                @input="product.refreshTotalAmount(); form.errors.clear(`totalAmount-${product.name}`)"
                            />
                        </div>
                        <div class="tw-w-16 tw-mr-2 tw-mb-2">
                            <span>Total</span>
                            <input
                                type="number"
                                min="0"
                                v-model="product.totalAmount"
                                @input="product.resetTotalAmount(); form.errors.clear(`totalAmount-${product.name}`)"
                            />
                        </div>
                    </div>
                    <!-- <div
                        v-if="this.form.errors.has('totalAmount-'+product.name)"
                    >{{this.form.errors.get('totalAmount-'+product.name)}}</div>-->
                </div>
                <div class="tw-my-6" v-else>
                    <label
                        :class="{ 'tw-text-red-500': this.form.errors.has('totalAmount-'+product.name) }"
                        for="product_sizes"
                    >
                        Bitte wählen Sie ggf. die genauen Größen und Mengen oder
                        geben die gewünschte Gesamtmenge bei "Total" an.
                    </label>
                    <div class="tw-w-16 tw-mr-2 tw-mb-2">
                        <span>Total</span>
                        <input
                            type="number"
                            min="0"
                            v-model="product.totalAmount"
                            @input="product.resetTotalAmount(); form.errors.clear(`totalAmount-${product.name}`)"
                        />
                    </div>
                </div>

                <div
                    class="tw-my-6 tw-flex tw-items-start tw-justify-center tw-flex-col"
                    v-if="product.category !== 'anderes Produkt'"
                >
                    <label for="color_picker">Farbauswahl</label>
                    <color-picker
                        picker="square"
                        model="hex"
                        menu-position="left"
                        :draggable="false"
                        v-model="product.color"
                        class="tw-mt-3"
                    >
                        <div class="tw-flex tw-items-center tw-justify-start tw-w-48">
                            <div
                                class="tw-w-32 tw-flex tw-items-center tw-justify-center tw-shadow tw-rounded tw-py-2 tw-px-3 tw-mr-3"
                            >Farbe ändern
                            </div>
                            <svg viewBox="0 0 24 24" style="width: 2rem">
                                <pattern
                                    id="checkerboard"
                                    width="6"
                                    height="6"
                                    patternUnits="userSpaceOnUse"
                                    fill="FFF"
                                >
                                    <rect fill="#7080707f" x="0" width="3" height="3" y="0"/>
                                    <rect fill="#7080707f" x="3" width="3" height="3" y="3"/>
                                </pattern>
                                <circle cx="12" cy="12" r="12" fill="url(#checkerboard)"/>
                                <circle cx="12" cy="12" r="12"/>
                            </svg>
                        </div>
                    </color-picker>
                </div>

                <div class="tw-mt-8 tw-mb-6" v-if="product.category == 'Textilien'">
                    <label
                        :class="{ 'tw-text-red-500': this.form.errors.has('quality-'+product.name) }"
                        for="product_quality"
                    >Qualitätsauswahl</label>
                    <div class="tw-flex tw-items-center tw-justify-start tw-flex-wrap tw-mt-2">
                        <div
                            class="tw-border tw-rounded tw-mr-2 tw-mb-2 hover:tw-border-green-300 tw-px-3 tw-py-2 tw-cursor-pointer"
                            v-for="(quality, index) in this.$root.qualities"
                            :key="quality.name + index"
                            :class="{ 'tw-border-green-300 tw-bg-green-300':  product.quality == quality.name}"
                            @click="product.quality = quality.name; form.errors.clear(`quality-${product.name}`);"
                        >{{ quality.name}}
                        </div>
                    </div>
                </div>

                <div class="tw-my-6">
                    <label class="tw-my-2 tw-mb-2" for="product_description">Produkt Beschreibung</label>
                    <textarea
                        v-model="product.description"
                        rows="5"
                        placeholder="Hinweise"
                        class="tw-p-2"
                    ></textarea>
                </div>
                <div class="tw-my-6 tw-flex tw-justify-center tw-items-center">
                    <div
                        class="tw-flex tw-items-center tw-justify-center tw-cursor-pointer tw-border tw-rounded hover:tw-bg-green-300 hover:tw-border-green-300 tw-w-24 tw-px-3 tw-py-2 tw-text-center tw-font-semibold"
                        @click="validateStep()"
                    >Weiter
                    </div>
                </div>
                <div class="tw-my-6" v-if="products.length > 1 && form.errors.any()">
                    <div
                        class="tw-text-red-500"
                        v-for="(error, index) in form.errors.errors"
                        :key="index"
                    >{{ error[0] }}
                    </div>
                </div>
            </div>
            <div v-show="activeStep == 2">
                <div class="tw-mb-6">
                    <h3>Veredelung</h3>
                    <p class="tw-text-sm md:tw-text-base">Bearbeiten Sie Ihre Artikel</p>
                </div>
                <div class="tw-my-3" v-if="positionTypes && positionTypes.length">
                    <div>
                        <h5>Bitte wählen Sie eine Veredelungsposition:</h5>
                        <div class="tw-flex tw-flex-wrap tw-items-center tw-justify-start tw-mb-6">
                            <div
                                class="tw-border tw-rounded tw-py-2 tw-px-3 tw-mr-2 tw-mb-2 hover:tw-border-green-300"
                                :class="{ 'tw-border-green-300 tw-bg-green-300':  position.name == item.name}"
                                @click="position.name = item.name; position.imagePath = item.imagePath;"
                                v-for="(item, index) in positionTypes"
                                :key="item.name + index"
                            >
                                <img
                                    class="tw-w-8"
                                    style="max-height: 2rem; min-height: 2rem;"
                                    :src="item.imagePath"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tw-my-6">
                    <dropzone
                        ref="dropzone"
                        id="dropzone"
                        :options="dropzoneOptions"
                        @vdropzone-sending="uploadFile"
                        @vdropzone-removed-file="removeFile"
                        :destroy-dropzone="false"
                    ></dropzone>
                </div>
                <div class="tw-my-6">
                    <h5>Veredlungsart</h5>
                    <div class="tw-flex tw-items-center tw-justify-center">
                        <div
                            class="tw-h-full tw-flex tw-items-start tw-justify-end tw-flex-col tw-w-1/3"
                        >
                            <p class="tw-text-sm">
                                Capri-Shirt empfiehlt das beste
                                Veredelungsverfahren für Ihr Motiv
                            </p>
                            <div
                                class="tw-border tw-rounded hover:tw-bg-green-300 hover:tw-border-green-300 tw-w-32 tw-px-3 tw-py-2 tw-text-center tw-mt-3"
                                :class="{ 'tw-bg-green-300 tw-border-green-300': position.type == 'nach Eignung'}"
                                @click="position.type = 'nach Eignung'"
                            >nach Eignung
                            </div>
                        </div>
                        <div
                            class="tw-h-full tw-flex tw-items-end tw-justify-center tw-font-bold tw-w-1/3 tw-pb-3"
                        >ODER
                        </div>
                        <div
                            class="tw-h-full tw-flex tw-items-end tw-justify-start tw-w-1/3 tw-pb-1"
                        >
                            <select name="position_printing" v-model="position.type" class="tw-h-8">
                                <option selected disabled value="nach Eignung">wählen</option>

                                <option
                                    v-for="type in this.$root.printTypes"
                                    :key="type.name"
                                    :value="type.name"
                                >{{ type.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="tw-my-6">
                    <h5>Druckfarbe</h5>
                    <div class="tw-flex tw-items-center tw-justify-center tw-h-20">
                        <div
                            class="tw-h-full tw-flex tw-items-start tw-justify-start tw-flex-col tw-w-1/3"
                        >
                            <p class="tw-text-sm">Standardfarbe</p>
                            <div class="tw-flex">
                                <div
                                    class="tw-w-32 md:tw-w-full tw-flex tw-items-center tw-justify-center tw-shadow tw-rounded tw-py-2 tw-px-3 tw-mr-3 hover:tw-bg-green-300"
                                    @click="position.addColor()"
                                    v-if="position.colors.length < 6"
                                >Farbe hinzufügen
                                </div>
                                <div
                                    class="tw-w-32 tw-flex tw-items-center tw-justify-center tw-shadow tw-rounded tw-py-2 tw-px-3 tw-mr-3 hover:tw-bg-green-300"
                                    @click="position.resetColors()"
                                    v-else
                                >Farben zurücksetzen
                                </div>
                                <color-picker
                                    picker="square"
                                    model="hex"
                                    menu-position="left"
                                    :draggable="false"
                                    v-for="(item, index) in position.colors"
                                    :key="index"
                                    v-model="item.color"
                                    class="tw-mt-2 tw-mr-2"
                                ></color-picker>
                            </div>
                        </div>
                        <div
                            class="tw-h-full tw-flex tw-items-start tw-justify-center tw-font-bold tw-w-1/3 tw-pb-3"
                        >ODER/UND
                        </div>
                        <div class="tw-h-full tw-flex tw-items-end tw-justify-center tw-w-1/3">
                            <select
                                name="position_colors"
                                v-model="position.color"
                                class="tw-h-8 tw-mb-4"
                            >
                                <option value hidden class="tw-text-black">wählen</option>
                                <option
                                    v-for="type in this.$root.positionColors"
                                    :key="type.name"
                                    :value="type.name"
                                >{{ type.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="tw-my-6">
                    <label for="product_description">Hinweise</label>
                    <textarea
                        v-model="position.description"
                        rows="5"
                        placeholder="Hinweise"
                        class="tw-p-2"
                    ></textarea>
                </div>
                <div class="tw-my-6 tw-flex tw-justify-center tw-items-center">
                    <div
                        class="tw-flex tw-items-center tw-justify-center tw-border tw-rounded hover:tw-bg-green-300 hover:tw-border-green-300 tw-w-24 tw-px-3 tw-py-2 tw-text-center tw-font-semibold tw-mr-3"
                        @click="activeStep = 1"
                    >Zurück
                    </div>
                    <div
                        class="tw-flex tw-items-center tw-justify-center tw-border tw-rounded hover:tw-bg-green-300 hover:tw-border-green-300 tw-w-24 tw-px-3 tw-py-2 tw-text-center tw-font-semibold"
                        @click="activeStep = 3"
                    >Weiter
                    </div>
                </div>
            </div>
            <div v-show="activeStep == 3">
                <div class="tw-mb-6">
                    <h3>ZUSÄTZLICHE ANGABEN</h3>
                    <p class="tw-text-sm md:tw-text-base">Wann möchten Sie das Produkt haben</p>
                </div>
                <div class="tw-my-6">
                    <h5>Soll Ihr Auftrag zu einem bestimmten Termin fertiggestellt werden?</h5>
                    <div
                        class="tw-flex tw-flex-col md:tw-flex-row md:tw-items-start md:tw-justify-between"
                    >
                        <div class="md:tw-w-1/3">
                            <div
                                class="tw-border tw-rounded tw-py-2 tw-px-3 tw-mb-2 hover:tw-border-green-300 tw-text-center tw-w-2/3 tw-mx-auto"
                                :class="{ 'tw-border-green-300 tw-bg-green-300': form.delivery instanceof Date }"
                                @click="form.delivery = getNextWork(new Date())"
                            >Fixtermin wählen
                            </div>
                            <div class="tw-flex tw-items-center tw-justify-center">
                                <v-date-picker
                                    mode="single"
                                    v-model="form.delivery"
                                    :min-date="tomorrow"
                                    :disabled-dates="{ weekdays: [1, 7] }"
                                    is-inline
                                    class="tw-mt-6 tw-text-base"
                                ></v-date-picker>
                            </div>
                        </div>
                        <div class="tw-py-2 tw-px-3 tw-text-center tw-my-6 md:tw-my-0">ODER</div>
                        <div class="md:tw-w-1/3">
                            <div
                                class="tw-border tw-rounded tw-py-2 tw-px-3 tw-mb-2 hover:tw-border-green-300 tw-text-center tw-w-2/3 tw-mx-auto"
                                :class="{ 'tw-border-green-300 tw-bg-green-300': form.delivery == 'kostengünstigste Produktionszeit'}"
                                @click="form.delivery = 'kostengünstigste Produktionszeit'"
                            >kostengünstigste Produktionszeit
                            </div>
                            <div class="tw-mt-6 tw-text-center">
                                <div
                                    class="tw-font-semibold tw-mb-2 tw-my-4"
                                >Hinweise zu unseren Produktionszeiten:
                                </div>
                                <div class="tw-font-semibold tw-mb-2 tw-my-4">Siebdruck:</div>
                                <p>
                                    Eco-Spar-Tarif: 15 Werktage*
                                    <br/>Standard-Tarif: 7 Werktage*
                                    <br/>Express/Overnight-Tarif: ab 24 h
                                </p>
                                <div
                                    class="tw-font-semibold tw-mb-2 tw-my-4"
                                >Werbemittel und Großformatdrucke
                                </div>
                                <p>
                                    Standard-Tarif: 10 Werktage*
                                    <br/>Express-Tarif: 5 Werktage*
                                    <br/>Overnight-Tarif: ab 24 h
                                </p>
                                <div
                                    class="tw-font-semibold tw-mb-2 tw-my-4"
                                >Flock-, Flex- und Digitaldirektdruck (DTG)
                                </div>
                                <p>
                                    Standard-Tarif: 5 Werktage*
                                    <br/>Express/Overnight-Tarif: ab 24 h
                                </p>
                                <div class="tw-font-semibold tw-mb-2 tw-my-4">Bestickung</div>
                                <p>
                                    Standard-Tarif: 7 Werktage*
                                    <br/>Express/Overnight-Tarif: ab 24 h
                                </p>
                                <p>*Werktage sind Tage von Mo-Fr</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tw-my-6">
                    <h5>Warenübergabe</h5>
                    <div class="tw-flex tw-items-center tw-justify-start tw-mt-2">
                        <div
                            class="tw-border tw-rounded tw-py-2 tw-px-3 tw-mb-2 hover:tw-border-green-300 tw-text-center tw-mr-2"
                            :class="{ 'tw-border-green-300 tw-bg-green-300': form.sending == type.name }"
                            @click="form.sending = type.name"
                            v-for="type in this.$root.sendMethods"
                            :key="type.name"
                        >{{ type.name }}
                        </div>
                    </div>
                </div>
                <div class="tw-my-6">
                    <h5>Kontaktinformationen</h5>
                    <div>
                        <div>
                            <label class="tw-mt-4 tw-mb-2" for="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                v-model="form.email"
                                required
                            />
                        </div>
                        <div>
                            <label class="tw-mt-4 tw-mb-2" for="text">Nachricht</label>
                            <textarea class="tw-p-4" v-model="form.message" rows="5"></textarea>
                        </div>
                    </div>
                </div>
                <div class="tw-my-6 tw-flex tw-justify-center tw-items-center">
                    <div
                        class="tw-flex tw-items-center tw-justify-center tw-border tw-rounded hover:tw-bg-green-300 hover:tw-border-green-300 tw-w-24 tw-px-3 tw-py-2 tw-text-center tw-font-semibold tw-mr-3"
                        @click="activeStep = 2"
                    >Zurück
                    </div>
                    <button
                        class="tw-flex tw-items-center tw-justify-center tw-border tw-rounded hover:tw-bg-green-300 hover:tw-border-green-300 tw-px-3 tw-py-2 tw-text-center tw-font-semibold"
                        type="submit"
                    >Anfrage senden
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    import Form from "../models/Form";
    import Product from "../models/Product";
    import Verte from "verte";
    // import "verte/dist/verte.css";
    import vue2Dropzone from "vue2-dropzone";
    // import "vue2-dropzone/dist/vue2Dropzone.min.css";
    let md5 = require("md5");

    import { setupCalendar } from "v-calendar";

    export default {
        data() {
            return {
                form: new Form({
                    delivery: "kostengünstigste Produktionszeit",
                    sending: "Selbstabholung in unserem Werk Ludwigsfelde",
                    email: "",
                    message: ""
                }),
                products: [new Product()],
                activeProduct: 0,
                activePosition: 0,
                activeStep: 1,
                dropzoneOptions: {
                    url: "/includes/ext/uploads_cb.php",
                    thumbnailWidth: 200,
                    thumbnailHeight: 200,
                    maxFilesize: 4,
                    headers: { "My-Awesome-Header": "header value" },
                    acceptedFiles:
                        ".jpg, .ai, .psd, .pdf, .bmp, .png, .svg, .gif, .cdr, .tif, .tiff, .zip, .rar, .doc, .indd",
                    maxFiles: 5,
                    addRemoveLinks: true,
                    paramName: "file_data",
                    dictDefaultMessage:
                        "Legen Sie Dateien hier ab um Sie hochzuladen",
                    dictFallbackMessage:
                        "Ihr Browser unterstützt Drag&Drop Dateiuploads nicht",
                    dictFallbackText:
                        "Benutzen Sie das Formular um Ihre Dateien hochzuladen",
                    dictFileTooBig:
                        "Die Datei ist zu groß. Die maximale Dateigröße beträgt {{maxFileSize}}MB",
                    dictInvalidFileType:
                        "Eine Datei dieses Typs kann nicht hochgeladen werden",
                    dictResponseError:
                        "Der Server hat ihre Anfrage mit Status {{statusCode}} abgelehnt",
                    dictCancelUpload: "Hochladen abbrechen",
                    dictCancelUploadConfirmation: null,
                    dictRemoveFile: "Datei entfernen",
                    dictMaxFilesExceeded:
                        "Sie können keine weiteren Dateien mehr hochladen"
                },
                today: new Date(),
                tomorrow: false
            };
        },

        mounted() {
            this.tomorrow = new Date(this.today)
            this.tomorrow.setDate(this.tomorrow.getDate() + 1)
            this.tomorrow.setHours(0,0,0,0)
        },

        computed: {
            product() {
                return this.products[this.activeProduct];
            },
            position() {
                return this.products[this.activeProduct].positions[
                    this.activePosition
                    ];
            },
            positionTypes() {
                return this.$root.positionTypes[this.product.category];
            }
        },
        components: {
            "color-picker": Verte,
            dropzone: vue2Dropzone
        },
        methods: {
            submit() {
                if (this.validateStep()) {
                    axios
                        .post("/includes/plugins/cs_inquiry_form/index.php", {
                            sid: this.$root.sid,
                            token: this.$root.token,
                            products: this.products,
                            email: this.form.email,
                            message: this.form.message,
                            delivery: this.form.delivery,
                            sending: this.form.sending
                        })
                        .then(data => {
                            swal({
                                title: "Danke!",
                                text:
                                    "Wir werden Ihre Anfrage sobald wie möglich bearbeiten!",
                                icon: "success",
                                buttons: false,
                                timer: 3000
                            });

                            this.form = new Form({
                                delivery: "kostengünstigste Produktionszeit",
                                sending:
                                    "Selbstabholung in unserem Werk Ludwigsfelde",
                                email: "",
                                message: ""
                            });

                            this.activeStep = 1;
                            this.activeProduct = 0;
                            this.activePosition = 0;

                            this.products = [new Product()];
                            this.$refs.dropzone.removeAllFiles()
                        });
                }
            },
            validateStep() {
                let errors = {};
                if (this.activeStep == 1) {
                    for (let product of this.products) {
                        if (product.totalAmount < 1) {
                            errors[`totalAmount-${product.name}`] = [
                                `Bitte eine Menge bei ${product.name} angeben.`
                            ];
                        } else {
                            this.form.errors.clear(`totalAmount-${product.name}`);
                        }

                        if (
                            product.category == "Textilien" &&
                            product.quality == ""
                        ) {
                            errors[`quality-${product.name}`] = [
                                `Bitte eine Qualität aus der Qualitätsauswahl für das ${product.name} wählen.`
                            ];
                        } else {
                            this.form.errors.clear(`quality-${product.name}`);
                        }
                    }
                }

                if (this.activeStep == 3) {
                    if (!this.form.email) {
                        errors[`email`] = [`Bitte eine Email Adresse eingeben.`];
                    } else {
                        this.form.errors.clear(`email`);
                    }
                }

                this.form.errors.record(errors);

                if (this.form.errors.any()) {
                    return false;
                }

                if (this.activeStep == 1) {
                    this.activeStep = 2;
                    return true;
                }

                return true;
            },
            addProduct() {
                let length = this.products.push(new Product());

                this.activeProduct = length - 1;
            },
            removeProduct(index) {
                this.activeProduct = 0;
                this.products.splice(index, 1);
            },
            uploadFile(file, xhr, formData) {
                let uniqueName = md5(file.name);

                formData.append("jtl_token", this.$root.token);
                formData.append("sid", this.$root.sid);
                formData.append("uniquename", uniqueName);
                formData.append("cname", file.name);

                this.position.files.push({
                    name: file.name,
                    url: `/uploads/${uniqueName}`
                });
            },
            removeFile(fileToRemove) {
                let file = this.position.files.find(
                    file => file.name == fileToRemove.name
                );

                let xhr = new XMLHttpRequest();
                let formData = new FormData();

                formData.append("jtl_token", this.$root.token);
                formData.append("sid", this.$root.sid);
                formData.append("uniquename", md5(file.name));
                formData.append("action", "remove");

                xhr.open("POST", "/includes/ext/uploads_cb.php");
                xhr.send(formData);

                this.position.files.splice(this.position.files.findIndex(file => file.name === fileToRemove.name), 1)
            },
            getNextWork(d) {
                d.setDate(d.getDate() + 1); // tomorrow
                if (d.getDay() == 0) {
                    d.setDate(d.getDate() + 1);
                } else if (d.getDay() == 6) d.setDate(d.getDate() + 2);
                return d;
            }
        }
    };
</script>
<style>
    option:not(:first-of-type) {
        color: black;
    }
</style>