<template>
	<a-form :model="option" layout="vertical" class="w-full" style="width: 280px">
		<a-form-item label="图标大小" path="inputNumberValue">
			<div class="w-full flex items-center gap-x-10px">
				<a-slider v-model="option.size" :step="1" :min="12" :max="48" :show-ticks="true"/>
				<a-input-number v-model="option.size" :min="12" :max="48" style="width: 90px" />
			</div>
		</a-form-item>
		<a-form-item label="线条粗细" path="sliderValue">
			<div class="w-full flex items-center gap-x-10px">
				<a-slider v-model="option.strokeWidth" :step="1" :min="1" :max="4" :show-ticks="true"/>
				<a-input-number v-model="option.strokeWidth" :min="1" :max="4" style="width: 90px" />
			</div>
		</a-form-item>
		<a-form-item label="图标风格" path="timePickerValue">
			<a-radio-group v-model="option.theme">
				<template v-for="option in options" :key="option.value">
					<a-radio :value="option.value">
						<template #radio="{ checked }">
							<div class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
								<div class="flex items-center">
									{{ option.label }}
								</div>
							</div>
						</template>
					</a-radio>
				</template>
			</a-radio-group>
		</a-form-item>
		<a-form-item label="线条颜色" path="colorValue">
			<a-grid :row-gap="12" :col-gap="30" :cols="2">
				<template v-if="option.theme === 'outline'">
					<a-grid-item>
						<a-form-item field="colors.outline.fill" label="外部描边颜色">
							<a-space fill>
								<color-picker v-model:hex="option.colors.outline.fill"></color-picker>
								<a-input size="mini" v-model="option.colors.outline.fill" />
							</a-space>
						</a-form-item>
					</a-grid-item>
				</template>

				<template v-if="option.theme === 'filled'">
					<a-grid-item>
						<a-form-item field="colors.filled.fill" :label="'fillColor'">
							<a-space fill>
								<color-picker v-model:hex="option.colors.filled.fill" />
								<a-input size="mini" v-model="option.colors.filled.fill" />
							</a-space>
						</a-form-item>
					</a-grid-item>
				</template>

				<template v-if="option.theme === 'two-tone'">
					<a-grid-item>
						<a-form-item field="colors.twoTone.fill" :label="'strokeColor'">
							<a-space fill>
								<color-picker v-model:hex="option.colors.twoTone.fill"></color-picker>
								<a-input size="mini" v-model="option.colors.twoTone.fill" />
							</a-space>
						</a-form-item>
					</a-grid-item>
					<a-grid-item>
						<a-form-item field="colors.twoTone.twoTone" :label="'fillColor'">
							<a-space fill>
								<color-picker v-model:hex="option.colors.twoTone.twoTone"></color-picker>
								<a-input size="mini" v-model="option.colors.twoTone.twoTone" />
							</a-space>
						</a-form-item>
					</a-grid-item>
				</template>

				<template v-if="option.theme === 'multi-color'">
					<a-grid-item>
						<a-form-item field="colors.multiColor.outStrokeColor" :label="'outerStrokeColor'">
							<a-space fill>
								<color-picker v-model:hex="option.colors.multiColor.outStrokeColor"></color-picker>
								<a-input size="mini" v-model="option.colors.multiColor.outStrokeColor" />
							</a-space>
						</a-form-item>
					</a-grid-item>
					<a-grid-item>
						<a-form-item field="colors.multiColor.outFillColor" :label="'outerFillColor'">
							<a-space fill>
								<color-picker v-model:hex="option.colors.multiColor.outFillColor"></color-picker>
								<a-input size="mini" v-model="option.colors.multiColor.outFillColor" />
							</a-space>
						</a-form-item>
					</a-grid-item>
					<a-grid-item>
						<a-form-item field="colors.multiColor.innerStrokeColor" :label="'interStrokeColor'">
							<a-space>
								<color-picker v-model:hex="option.colors.multiColor.innerStrokeColor"></color-picker>
								<a-input size="mini" v-model="option.colors.multiColor.innerStrokeColor" />
							</a-space>
						</a-form-item>
					</a-grid-item>
					<a-grid-item>
						<a-form-item field="colors.multiColor.innerFillColor" :label="'interFillColor'">
							<a-space fill>
								<color-picker v-model:hex="option.colors.multiColor.innerFillColor"></color-picker>
								<a-input size="mini" v-model="option.colors.multiColor.innerFillColor" />
							</a-space>
						</a-form-item>
					</a-grid-item>
				</template>
			</a-grid>
		</a-form-item>
		<a-form-item label="端点类型" path="timePickerValue" :wrapper-col-props="{ span: 24, offset: 0 }">
			<a-radio-group v-model="option.strokeLinecap">
				<a-radio value="round">
					<template #radio="{ checked }">
						<div class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
							<div class="flex items-center">
								<EndpointRound :size="16" />
							</div>
						</div>
					</template>
				</a-radio>
				<a-radio value="butt">
					<template #radio="{ checked }">
						<div class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
							<div class="flex items-center">
								<EndpointFlat :size="16" />
							</div>
						</div>
					</template>
				</a-radio>
				<a-radio value="square">
					<template #radio="{ checked }">
						<div class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
							<div class="flex items-center">
								<EndpointSquare :size="16" />
							</div>
						</div>
					</template>
				</a-radio>
			</a-radio-group>
		</a-form-item>
		<a-form-item label="拐点类型" path="timePickerValue">
			<a-radio-group v-model="option.strokeLinejoin">
				<a-radio value="round">
					<template #radio="{ checked }">
						<div class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
							<div class="flex items-center">
								<NodeRound :size="16" />
							</div>
						</div>
					</template>
				</a-radio>
				<a-radio value="miter">
					<template #radio="{ checked }">
						<div class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
							<div class="flex items-center">
								<NodeFlat :size="16" />
							</div>
						</div>
					</template>
				</a-radio>
				<a-radio value="bevel">
					<template #radio="{ checked }">
						<div class="custom-radio-card" :class="{ 'custom-radio-card-checked': checked }">
							<div class="flex items-center">
								<NodeSquare :size="16" />
							</div>
						</div>
					</template>
				</a-radio>
			</a-radio-group>
		</a-form-item>
	</a-form>
</template>

<script setup lang="ts">
	import { EndpointRound, EndpointFlat, EndpointSquare, NodeRound, NodeFlat, NodeSquare } from '@icon-space/vue-next'

	const option = useIconOptionStore()
	const options = [
		{
			label: '线性',
			value: 'outline'
		},
		{
			label: '填充',
			value: 'filled'
		},
		{
			label: '双色',
			value: 'two-tone'
		},
		{
			label: '多彩',
			value: 'multi-color'
		}
	]
</script>

<style lang="less" scoped>
	.custom-radio-card {
		padding: 5px 25px;
		border: 1px solid var(--color-border-2);
		border-radius: 4px;
		box-sizing: border-box;
		margin-top: 5px;
		&:hover,
		&-checked {
			border-color: rgb(var(--primary-6));
		}
		&-checked {
			background-color: var(--color-primary-light-1);
		}
	}
</style>
