# addEffect

Adds an effect.

After this, use [setModelInfo](./setmodelinfo.md) to set position.

## Code Information

- **Name**: `addEffect`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 08 00`
- **Assembly Address in Memory** : `0x8919610`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to **store the  [Handle](./guide/category.md#getting-handle)**. -1 if failed to create the effect.
- `(int)effect_id` *(8 bytes)* : [ID of the effect](./guide/reference-table.md#effectparam-ids) in `effectparam`.
- `(int)troop_type` *(8 bytes)* : The [troop type](./guide/reference-table.md#troop-types) to set.
- `(float)scale` *(8 bytes)* : Scale multiplier for the effect. Usually this is 1.
- `(bool)Var4` *(8 bytes)* : Please describe what this does. Mostly 0 or 1, this can be kept as 0.

## Remarks

The **desired effect must be preloaded** through [readArcFile](./readarcfile.md) before calling this.

## Example

Here is one example in hex:

```25 16 08 00 / 04 00 00 00 / 04 00 00 00 / 02 00 00 00 / f6 00 00 00 / 02 00 00 00 / 04 00 00 00 / 10 00 00 00 / 00 00 80 3f / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
addEffect((int *)iVar4, (int)246, (int)4, (float)1, (int)0)
```

...which plants grasses.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08919610(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  uint *puVar5;
  int iVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (uint *)Pac_Get_Param(param_2,4,1,4);
  *piVar1 = -1;
  iVar6 = *(int *)(*(int *)(param_1 + 0x10) + 0x128);
  if ((iVar6 != 0) && (iVar6 = Call_Effect(*puVar4,iVar6,*puVar2,*puVar3,0), iVar6 != 0)) {
    *piVar1 = (int)*(short *)(iVar6 + 0x78);
    *(byte *)(iVar6 + 0x325) = *(byte *)(iVar6 + 0x325) & 0xef | (byte)((*puVar5 & 1) << 4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
