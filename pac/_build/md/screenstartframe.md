# screenStartFrame

Limits screen view as rectangle shape.

## Code Information

- **Name**: `screenStartFrame`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 a9 00`
- **Assembly Address in Memory** : `0x8922e24`

## Parameters

- `(int)z_priority` *(8 bytes)* : z-index (render priority), higher goes more top.
- `(float)x_position` *(8 bytes)* : X position, as PSP screen pixels.
- `(float)y_position` *(8 bytes)* : Y position, as PSP screen pixels.
- `(float)red` *(8 bytes)* : Red value of the blind area, 0~1.
- `(float)green` *(8 bytes)* : Green value of the blind area, 0~1.
- `(float)blue` *(8 bytes)* : Blue value of the blind area, 0~1.
- `(float)alpha` *(8 bytes)* : Alpha value of the blind area, 0~1.
- `(float)box_size` *(8 bytes)* : Box size, as PSP screen pixels. The bigger, the more sight.
- `(float)box_size_y` *(8 bytes)* : Y size, setting -1 fits to screen ratio.
- `(float)animation_time` *(8 bytes)* : Animation time as seconds, 0 for no animation.

The pivot is center and offset starts from top.

Note that **PSP screen size is 480 x 272** and the **size pivot is on the middle, offset starts from top left**.  240 x 136 will move the rectangle to the center.

## Example

Here is one example in hex:

```25 16 a9 00 / 02 00 00 00 / ac bb 0d 00 / 10 00 00 00 / 00 00 70 43 / 10 00 00 00 / 00 00 08 43 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 80 3f / 10 00 00 00 / 00 00 c8 42 / 10 00 00 00 / 00 00 80 bf / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
screenStartFrame((int)900012, (float)240.0, (float)136.0, (float)0.0, (float)0.0, (float)0.0, (float)1.0, (float)100.0, (float)-1.0, (float)0.0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08922e24(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined4 *puVar5;
  int iVar6;
  int iVar7;
  undefined4 uVar8;
  undefined4 uVar9;
  undefined4 uVar10;
  undefined4 uVar11;
  undefined4 uVar12;
  undefined4 uVar13;
  undefined4 uVar14;
  undefined4 uVar15;
  undefined4 uVar16;
  undefined4 local_20;
  undefined4 local_1c;
  undefined4 local_18;
  undefined4 local_14;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar7 = *piVar2;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar16 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar14 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar15 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar12 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar13 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar10 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar11 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar8 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar9 = *puVar3;
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (iVar4 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar4 != 0)) {
    iVar6 = *(int *)(*(int *)(iVar4 + 0x2c) + 0x60);
    iVar4 = (**(code **)(*(int *)(iVar6 + 0xa8) + 0x10))(iVar6 + 0x8c);
    if (iVar7 != iVar4) {
      (**(code **)(*(int *)(iVar6 + 0xa8) + 0x14))(iVar6 + 0x8c,iVar7);
    }
    puVar3 = (undefined4 *)&DAT_00000010;
    puVar5 = &local_20;
    puVar1 = puVar5;
    while (puVar1 != (undefined4 *)0x0) {
      *(undefined *)puVar5 = 0;
      puVar5 = (undefined4 *)((int)puVar5 + 1);
      puVar3 = (undefined4 *)((int)puVar3 + -1);
      puVar1 = puVar3;
    }
    local_20 = uVar15;
    local_1c = uVar12;
    local_18 = uVar13;
    local_14 = uVar10;
    local_10 = uVar11;
    local_c = uVar8;
    local_8 = uVar16;
    local_4 = uVar14;
    func_0x08b33630(uVar9,iVar6,&local_8,&local_20,&local_10);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

