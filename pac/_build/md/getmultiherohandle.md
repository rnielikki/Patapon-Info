# getMultiHeroHandle

Gets player hero handle in the hideout in multi.

## Code Information

- **Name**: `getMultiHeroHandle`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 10 00`
- **Assembly Address in Memory** : `0x8b4e0a8`

## Parameters

- `(int *)unit_handle` *(8 bytes)* : Variable to *store* the unit handle of the certain hero.
- `(int)unit_index` *(8 bytes)* : Hero unit index in the multi, expected 0~3.
- `(bool *)Var2` *(8 bytes)* : Variable to *store* a value. Please describe. Might be related if the resource is loaded and valid.

## Example

Here is one example in hex:

```25 1c 10 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 08 00 00 00 / ff 01 00 00```

Which is interpreted as:

```c
getMultiHeroHandle((int *)iVar0, (int)0, ((global)int *)giVar511)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4e0a8(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  uint *puVar3;
  int iVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar5 = *piVar2;
  puVar3 = (uint *)Pac_Get_Param(param_2,2,1,4);
  *piVar1 = -1;
  *puVar3 = 0;
  if ((((*(int *)(param_1 + 0x10) != 0) &&
       (iVar5 = iVar5 * 0x500 + *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0xcdc4),
       iVar5 != -0x180)) && ((int *)(iVar5 + 400) != (int *)0x0)) &&
     (iVar4 = *(int *)(iVar5 + 400), iVar4 != 0)) {
    *piVar1 = (int)*(short *)(iVar4 + 0x78);
    *puVar3 = (uint)*(byte *)(iVar5 + 0x518);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

