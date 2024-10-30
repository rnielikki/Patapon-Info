# playHitEffect

Displays damage number. This is meant for cutscene and **does not deal actual damage**.

## Code Information

- **Name**: `playHitEffect`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 12 01`
- **Assembly Address in Memory** : `0x89297d8`

## Parameters

- `(float)position_x` *(8 bytes)* : X Position to display, as PSP pixels in world screen.
- `(float)position_y` *(8 bytes)* : Y position to display, as PSP pixels in world screen, **relative to the ground**.
- `(int)damage_amount` *(8 bytes)* : Damage amount to display.
- `(int)display_type` *(8 bytes)* : 0 is normal damage display, 1 is critical, 2 is healing.

Note that **PSP screen size is 480 x 272**.

## Example

Here is one example in hex:

```25 16 12 01 / 10 00 00 00 / 00 00 b9 44 / 10 00 00 00 / 00 00 f0 41 / 02 00 00 00 / 9f 86 01 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
playHitEffect((float)1480, (float)30, (int)99999, (int)1)
```

This is from the hero kick scene.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089297d8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 uVar5;
  int iVar6;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  iVar6 = *(int *)(*(int *)(param_1 + 0x10) + 0x128);
  if (iVar6 != 0) {
    local_c = *puVar2;
    local_10 = *puVar1;
    local_4 = 0x3f800000;
    local_8 = 0;
    uVar5 = FUN_088ad944(iVar6,1);
    Damage::Display_Damage(uVar5,*puVar4,*puVar3,&local_10,0,1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

