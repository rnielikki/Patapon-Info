# getDisablePercussionFlag

Gets if the specific drum is [disabled](./setdisablepercussionflag.md) or or all drums are disabled.

## Code Information

- **Name**: `getDisablePercussionFlag`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 1a 00`
- **Assembly Address in Memory** : `0x8970fc0`

## Parameters

- `(int)drum_id` *(8 bytes)* : [Drum ID](./guide/reference-table.md#drum-ids) to check if the drum is enabled or disabled. 0 checks if every drum is disabled.
- `(int *)disabled` *(8 bytes)* : Variable to *store* if the drum is enabled or not. **Stores 1 if disabled**, otherwise saves 0.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970fc0(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar3 = func_0x08b5f990(*puVar1);
  *puVar2 = uVar3;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

