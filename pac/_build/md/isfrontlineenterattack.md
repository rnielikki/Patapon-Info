# isFrontLineEnterAttack

Check if the front of the squad is in the attack distance.

## Code Information

- **Name**: `isFrontLineEnterAttack`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 f1 00`
- **Assembly Address in Memory** : `0x8926c24`

## Parameters

- `(int *)squad_handle` *(8 bytes)* : The target squad handle.
- `(int)squadactivityparam_id` *(8 bytes)* : `squadActivityParam` id that contains the *attack distance*, -1 for default.
- `(int *)result` *(8 bytes)* : 1 if the enemy entered the attack sight, otherwise 0.

## Example

Here is one example in hex:

```25 16 f1 00 / 04 00 00 00 / 2c 00 00 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
isFrontLineEnterAttack((int *)iVar44, (int *)iVar0, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08926c24(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  float fVar7;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  *puVar3 = 0;
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar4 != 0) && (iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4), iVar5 == 3)) {
    iVar5 = *(int *)(iVar4 + 0x704);
    iVar6 = *(int *)(iVar4 + 0x490);
    if (iVar6 != 0) {
      fVar7 = (float)FUN_088f7c70(iVar4 + 0x1f0,*puVar2);
      if (*(int *)(iVar5 + 0x288) == 1) {
        fVar7 = fVar7 + *(float *)(*(int *)(iVar6 + 200) + 0xc0);
      }
      else {
        fVar7 = *(float *)(*(int *)(iVar6 + 200) + 0xc0) - fVar7;
      }
      iVar4 = FUN_088f9bb8(fVar7,iVar5 + 0x170);
      if (iVar4 == 0) {
        *puVar3 = 1;
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

