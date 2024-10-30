# sysytemMessage

Displays a message on the center of the screen, e.g. "Time's up!" in tutorial.


## Code Information

- **Name**: `sysytemMessage`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 04 00`
- **Assembly Address in Memory** : `0x892bbd8`

## Parameters

- `(float)position_x` *(8 bytes)* : X Position of the text as PSP pixels. **0 is leftmost of the screen**.
- `(float)position_y` *(8 bytes)* : Y Position of the text as PSP pixels. **0 is topmost of the screen**.
- `(float)scale` *(8 bytes)* : Scale the text as PSP pixels.
- `(float)appear_time` *(8 bytes)* : Spped of the appear animation, *as seconds*.
- `(float)display_time` *(8 bytes)* : Time to show the text, *as seconds*.
   - The display time includs animation time. For example, if animation is 2 seconds and display is 1.5 seconds, the text will disappear before the animation is done.
- `(float)disappear_time` *(8 bytes)* : Supposed to be, but doesn't work.
- `(int)anim_type` *(8 bytes)* : Value in range of 0~3. This instruction won't work with incorrect range of this value.
   - 0 wipe from left to right (seems anim speed doesn't affect), 1 scale + fade, 2 somehow broken, 3 fade in only
- `(Address)message_id` *(4 bytes)* : The text message ID.
  - This is message ID from **message address table in the PAC file**. Details on: [about message table](./guide/about-message.md#message-table).

Note that the **PSP screen size is 480 x 272**.

The text anchor is on **X center, Y top**.

## Remarks

If [callSysMsg](./callsysmsg.md) or [callSysMsgLabel](./callsysmsglabel.md) is called, this sysytemMessage will be disappeared.

## Example

Here is one example in hex:

```25 03 04 00 / 10 00 00 00 / 00 00 70 43 / 10 00 00 00 / 00 00 c8 42 / 10 00 00 00 / 00 00 90 41 / 10 00 00 00 / 9a 99 99 3e / 10 00 00 00 / 00 00 38 41 / 10 00 00 00 / 9a 99 99 3e / 02 00 00 00 / 00 00 00 00 / 08 e6 05 00```

Which is interpreted as:

```c
sysytemMessage((float)240, (float)100, (float)18, (float)0.3, (float)11.5, (float)0.3, (int)0, 0x5e608)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892bbd8(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,
                 undefined4 param_5,undefined4 param_6,undefined4 param_7,undefined4 param_8)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  float *pfVar4;
  float *pfVar5;
  float *pfVar6;
  int *piVar7;
  int *piVar8;
  int iVar9;
  int iVar10;
  undefined4 *puVar11;
  uint uVar12;
  undefined4 filepath;
  int iVar13;
  undefined4 uVar14;
  float fVar15;
  undefined4 local_a0;
  undefined4 local_9c;
  undefined4 local_98;
  undefined4 local_94;
  undefined4 local_90;
  undefined4 local_8c;
  undefined4 local_88;
  undefined4 local_84;
  undefined4 local_80;
  undefined4 local_7c;
  undefined4 local_78;
  undefined4 local_74;
  undefined4 local_70;
  undefined4 local_6c;
  undefined4 local_68;
  undefined4 local_64;
  undefined auStack96 [64];
  undefined auStack32 [32];
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  pfVar4 = (float *)Pac_Get_Param(param_2,3,1,4);
  pfVar5 = (float *)Pac_Get_Param(param_2,4,1,4);
  pfVar6 = (float *)Pac_Get_Param(param_2,5,1,4);
  piVar7 = (int *)Pac_Get_Param(param_2,6,1,4);
  piVar8 = (int *)Pac_Get_Param(param_2,7,0,4);
  FUN_0892d470(param_1);
  iVar13 = *piVar8;
  if (iVar13 < 0) {
    uVar14 = 0;
  }
  else {
    iVar9 = FUN_0883bc1c(param_2);
    iVar10 = Save::Get_Save_BaseAddr(1);
    uVar14 = Message::Get_MsgAddr_With_FullID(iVar10 + 0x98,*(undefined4 *)(iVar9 + iVar13));
  }
  iVar13 = *piVar7;
  if (iVar13 == 3) {
    if (ABS(*pfVar4) < 0.001) {
      *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x34c) = 0;
    }
    else {
      *(float *)(*(int *)(param_1 + 0x2c) + 0x34c) = *pfVar4;
    }
    if (ABS(*pfVar4) < 0.001) {
      *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x350) = 0;
    }
    else {
      *(float *)(*(int *)(param_1 + 0x2c) + 0x350) = *pfVar4;
    }
    if (ABS(*pfVar6) < 0.001) {
      *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x354) = 0;
    }
    else {
      *(float *)(*(int *)(param_1 + 0x2c) + 0x354) = *pfVar6;
    }
    *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x338) = 0;
    FUN_08935148(*(undefined4 *)(param_1 + 0x2c),3);
    *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x1a0) = 1;
    *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x1a4) = 2;
    local_98 = *puVar3;
    local_94 = local_98;
    FUN_089350e8(*(undefined4 *)(param_1 + 0x2c),&local_98);
    FUN_089353d0(*(undefined4 *)(param_1 + 0x2c),param_1 + 0x23c);
    FUN_089352a0(*(undefined4 *)(param_1 + 0x2c),uVar14,0);
    fVar15 = *pfVar5 * 4800.0;
    if (fVar15 < 2.147484e+09) {
      uVar12 = (uint)fVar15;
    }
    else {
      uVar12 = (int)(fVar15 - 2.147484e+09) | 0xffff8000;
    }
    *(uint *)(*(int *)(param_1 + 0x2c) + 0x358) = uVar12;
    local_9c = *puVar2;
    local_a0 = *puVar1;
    FUN_08939140(*(undefined4 *)(param_1 + 0x2c),&local_a0);
    uVar14 = *puVar2;
    iVar13 = *(int *)(param_1 + 0x2c);
    *(undefined4 *)(iVar13 + 0x170) = *puVar1;
    *(undefined4 *)(iVar13 + 0x174) = uVar14;
    (**(code **)(*(int *)(*(int *)(param_1 + 0x2c) + 0x32c) + 0x14))
              (*(int *)(param_1 + 0x2c) + 0x310,*(undefined4 *)(param_1 + 0x244));
  }
  else if (iVar13 == 2) {
    filepath = 4;
    puVar11 = (undefined4 *)Pac_Get_Param(param_2,7,1);
    Data::Load_from_path(auStack32,&DAT_08a6007c,*puVar11,filepath,param_5,param_6,param_7,param_8);
    FUN_088740fc(param_1 + 0x34,uVar14,0x100);
    Message::Write_Value_Final(auStack96,0x40,auStack32);
    FUN_088740a0(param_1 + 0x34,auStack96,0x100);
    *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x34c) = 0;
    *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x354) = 0x3e800000;
    *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x1a0) = 0;
    *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x1a4) = 0;
    FUN_08935148(*(undefined4 *)(param_1 + 0x2c),3);
    local_88 = *puVar3;
    local_84 = local_88;
    FUN_089350e8(*(undefined4 *)(param_1 + 0x2c),&local_88);
    FUN_089353d0(*(undefined4 *)(param_1 + 0x2c),param_1 + 0x23c);
    FUN_089352a0(*(undefined4 *)(param_1 + 0x2c),param_1 + 0x34,0);
    FUN_08939168(*(undefined4 *)(param_1 + 0x2c),1);
    fVar15 = *pfVar5 * 4800.0;
    if (fVar15 < 2.147484e+09) {
      uVar12 = (uint)fVar15;
    }
    else {
      uVar12 = (int)(fVar15 - 2.147484e+09) | 0xffff8000;
    }
    *(uint *)(*(int *)(param_1 + 0x2c) + 0x358) = uVar12;
    local_8c = *puVar2;
    local_90 = *puVar1;
    FUN_08939140(*(undefined4 *)(param_1 + 0x2c),&local_90);
    uVar14 = *puVar2;
    iVar13 = *(int *)(param_1 + 0x2c);
    *(undefined4 *)(iVar13 + 0x170) = *puVar1;
    *(undefined4 *)(iVar13 + 0x174) = uVar14;
    (**(code **)(*(int *)(*(int *)(param_1 + 0x2c) + 0x32c) + 0x14))
              (*(int *)(param_1 + 0x2c) + 0x310,*(undefined4 *)(param_1 + 0x244));
  }
  else if (iVar13 == 1) {
    if (ABS(*pfVar4) < 0.001) {
      *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x34c) = 0;
    }
    else {
      *(float *)(*(int *)(param_1 + 0x2c) + 0x34c) = *pfVar4;
    }
    if (ABS(*pfVar4) < 0.001) {
      *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x350) = 0;
    }
    else {
      *(float *)(*(int *)(param_1 + 0x2c) + 0x350) = *pfVar4;
    }
    if (ABS(*pfVar4) < 0.001) {
      *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x354) = 0;
    }
    else {
      *(float *)(*(int *)(param_1 + 0x2c) + 0x354) = *pfVar4;
    }
    *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x338) = 0;
    FUN_08935148(*(undefined4 *)(param_1 + 0x2c),3);
    *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x1a0) = 1;
    *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x1a4) = 1;
    local_78 = *puVar3;
    local_74 = local_78;
    FUN_089350e8(*(undefined4 *)(param_1 + 0x2c),&local_78);
    FUN_089353d0(*(undefined4 *)(param_1 + 0x2c),param_1 + 0x23c);
    FUN_089352a0(*(undefined4 *)(param_1 + 0x2c),uVar14,0);
    fVar15 = *pfVar5 * 4800.0;
    if (fVar15 < 2.147484e+09) {
      uVar12 = (uint)fVar15;
    }
    else {
      uVar12 = (int)(fVar15 - 2.147484e+09) | 0xffff8000;
    }
    *(uint *)(*(int *)(param_1 + 0x2c) + 0x358) = uVar12;
    local_7c = *puVar2;
    local_80 = *puVar1;
    FUN_08939140(*(undefined4 *)(param_1 + 0x2c),&local_80);
    uVar14 = *puVar2;
    iVar13 = *(int *)(param_1 + 0x2c);
    *(undefined4 *)(iVar13 + 0x170) = *puVar1;
    *(undefined4 *)(iVar13 + 0x174) = uVar14;
    (**(code **)(*(int *)(*(int *)(param_1 + 0x2c) + 0x32c) + 0x14))
              (*(int *)(param_1 + 0x2c) + 0x310,*(undefined4 *)(param_1 + 0x244));
  }
  else if (iVar13 == 0) {
    *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x34c) = 0;
    *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x354) = 0x3e800000;
    *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x1a0) = 0;
    FUN_08935148(*(undefined4 *)(param_1 + 0x2c),3);
    *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x1a4) = 0;
    local_68 = *puVar3;
    local_64 = local_68;
    FUN_089350e8(*(undefined4 *)(param_1 + 0x2c),&local_68);
    FUN_089353d0(*(undefined4 *)(param_1 + 0x2c),param_1 + 0x23c);
    FUN_089352a0(*(undefined4 *)(param_1 + 0x2c),uVar14,0);
    FUN_08939168(*(undefined4 *)(param_1 + 0x2c),1);
    fVar15 = *pfVar5 * 4800.0;
    if (fVar15 < 2.147484e+09) {
      uVar12 = (uint)fVar15;
    }
    else {
      uVar12 = (int)(fVar15 - 2.147484e+09) | 0xffff8000;
    }
    *(uint *)(*(int *)(param_1 + 0x2c) + 0x358) = uVar12;
    local_6c = *puVar2;
    local_70 = *puVar1;
    FUN_08939140(*(undefined4 *)(param_1 + 0x2c),&local_70);
    uVar14 = *puVar2;
    iVar13 = *(int *)(param_1 + 0x2c);
    *(undefined4 *)(iVar13 + 0x170) = *puVar1;
    *(undefined4 *)(iVar13 + 0x174) = uVar14;
    (**(code **)(*(int *)(*(int *)(param_1 + 0x2c) + 0x32c) + 0x14))
              (*(int *)(param_1 + 0x2c) + 0x310,*(undefined4 *)(param_1 + 0x244));
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

