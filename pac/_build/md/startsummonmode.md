# startSummonMode

Starts summon manually from a specific player side.

## Code Information

- **Name**: `startSummonMode`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 28 00`
- **Assembly Address in Memory** : `0x8971704`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle to summon, obtained from [getUnitHandle](./getunithandle.md).
- `(uint)score` *(8 bytes)* : The summon score.

## Example

Here is one example in hex:

```25 0c 28 00 / 04 00 00 00 / 2c 00 00 00 / 02 00 00 00 / 80 96 98 00```

Which is interpreted as:

```c
startSummonMode((int *)iVar44, (int)10000000)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08971704(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (-1 < *piVar1) {
    uVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*piVar1,1);
    func_0x08b5f5c0(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x158),uVar3,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

