<script lang="ts">
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Input } from '$lib/components/ui/input';
	import { toast } from 'svelte-sonner';
	import type { ActionData, PageData } from './$types';
	import { Button } from '$lib/components/ui/button';

	let { data, form }: { data: PageData; form: ActionData } = $props();
	if (form && form.success)
		toast.success('등록에 성공하셨습니다.', {
			description: '확인 후 연락드리겠습니다.'
		});
</script>

<div class="container">
	<form method="POST" action="?/contact">
		<div class="space-y-12">
			<div class="border-b border-gray-900/10 pb-12">
				<h2 class="text-base/7 font-semibold text-gray-900">파브스 연락하기</h2>
				<p class="mt-1 text-sm/6 text-gray-600">
					Use a permanent address where you can receive mail.
				</p>

				<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
					<div class="sm:col-span-3">
						<label for="name" class="block text-sm/6 font-medium text-gray-900">이름</label>
						<div class="mt-2">
							<Input type="text" name="name" id="name" />
						</div>
					</div>

					<div class="sm:col-span-4">
						<label for="phone" class="block text-sm/6 font-medium text-gray-900">연락처</label>
						<div class="mt-2">
							<Input id="phone" name="phone" type="phone" />
						</div>
					</div>

					<div class="sm:col-span-4">
						<label for="description" class="block text-sm/6 font-medium text-gray-900"
							>상세 내용</label
						>
						<div class="mt-2">
							<Textarea placeholder="Type your message here." name="description" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-6 flex items-center justify-end gap-x-6">
			<Button type="button" variant="outline">Cancel</Button>
			<Button type="submit">Save</Button>
		</div>
	</form>
</div>
